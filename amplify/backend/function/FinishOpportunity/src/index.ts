import AWS from "aws-sdk";
import {
    getDBTableName,
    getTopicName,
    postSNSMessage
} from "../../../helpers/aws-helpers";
import { api } from "../../../amplify-meta.json";
/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

AWS.config.region = "eu-west-1";
const topic = "FinishOpportunityUpdate";

const getApplications = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityId: string
): Promise<Application[]> => {
    console.log({ TableName });
    const result = await client
        .query({
            TableName,
            ExpressionAttributeValues: { ":o": opportunityId },
            IndexName: "gsi-Application",
            KeyConditionExpression: "applicationOpportunityId = :o"
        })
        .promise();

    return result.Items || [];
};

const getListingsForOpportunity = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityId: string
): Promise<WebsiteListings> => {
    let result = await client
        .query({
            TableName,
            KeyConditionExpression: "websiteListingOpportunityId = :a",
            ExpressionAttributeValues: { ":a": opportunityId }
        })
        .promise();

    const items = (result.Items || []) as WebsiteListing[];
    return { items };
};

const getOpportunity = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityId: string
): Promise<Opportunity | undefined> => {
    let result = await client
        .get({ TableName, Key: { id: opportunityId } })
        .promise();

    return result.Item as Opportunity;
};

const sendOpportunityToSNS = async (event: FunctionEvent) => {
    try {
        const env = process.env.env;
        const apiId = api.ukri.output.GraphQLAPIIdOutput;
        const opportunityId = event.source.id;

        if (!env || !event.source) {
            console.error("An environment and opportunity id must be set");
            throw new Error("Opportunity can't be found");
        }

        const client = new AWS.DynamoDB.DocumentClient({
            region: "eu-west-1"
        });

        const opportunityTableName = getDBTableName(env, apiId, "Opportunity");
        const opportunity = await getOpportunity(
            client,
            opportunityTableName,
            opportunityId
        );
        console.log("opportunity", opportunity);
        if (!opportunity) {
            console.error(
                `The opportunity ${opportunityId} is not was not found`
            );

            throw new Error(`Opportunity not found`);
        }

        const listingTableName = getDBTableName(env, apiId, "WebsiteListing");
        const listings = await getListingsForOpportunity(
            client,
            listingTableName,
            opportunityId
        );

        if (!listings || !listings.items || !listings.items.length) {
            console.error(
                `Error finding listings for the opportunity, ${opportunityId}`
            );

            throw new Error(`Error finding listings for the opportunity`);
        }

        const applications = await getApplications(
            client,
            getDBTableName(env, apiId, "Application"),
            opportunityId
        );

        let app;
        if (applications.length) {
            app =
                applications.length === 1
                    ? applications[0]
                    : applications.sort(
                          (a, b) => (a.rank || 0) - (b.rank || 0)
                      )[0];
        }

        // @todo: Teammembers will need to be included here

        const {
            id,
            name,
            funders,
            description,
            __typename,
            fundersComplete
        } = opportunity;

        const message: Opportunity = {
            id,
            name,
            funders,
            description,
            fundersComplete,
            websiteListings: listings,
            __typename,
            application: app ? ({ items: app } as Applications) : null
        };

        const topicName = getTopicName(topic, env);
        await postSNSMessage(topicName, apiId, message);
    } catch (error) {}
};

interface Obj {
    [key: string]: any;
}

// event
interface FunctionEvent {
    typeName: string /* Filled dynamically based on @function usage location */;
    fieldName: string /* Filled dynamically based on @function usage location */;
    arguments: {
        /* GraphQL field arguments via $ctx.arguments */
    };
    identity: {
        /* AppSync identity object via $ctx.identity */
    };
    source: {
        /* The object returned by the parent resolver. E.G. if resolving field 'Post.comments', the source is the Post object. */
        id: string;
        typeComplete: boolean;
    };
    request: {
        /* AppSync request object. Contains things like headers. */
    };
    prev: {
        /* If using the built-in pipeline resolver support, this contains the object returned by the previous function. */
    };
}

exports.handler = async (
    event: FunctionEvent,
    context: {
        done: (
            err: Error | null | undefined,
            success: any | null | undefined
        ) => void;
    }
) => {
    console.log({ event });
    try {
        await sendOpportunityToSNS(event);
        context.done(null, "Successfully added Opportunity to SNS");
    } catch (error) {
        context.done(new Error("Resolver not found."), null);
    }
};
