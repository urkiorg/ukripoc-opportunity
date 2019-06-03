import AWS from "aws-sdk";
import { api } from "../../../amplify-meta.json";
/* Amplify Params - DO NOT EDIT
You can access the following resource attributes as environment variables from your Lambda function
var environment = process.env.ENV
var region = process.env.REGION

Amplify Params - DO NOT EDIT */

AWS.config.region = "eu-west-1";
const topic = "FinishOpportunityUpdate";

export const getSNSARNName = (
    partition: string,
    service: string,
    region: string = AWS.config.region as string,
    accountId: string,
    topicName: string
): string => `arn:${partition}:${service}:${region}:${accountId}:${topicName}`;

const getTopicName = (topic: string, env: string): string => `${topic}-${env}`;

const postSNSMessage = async (
    topicName: string,
    accountId: string,
    message: any
): Promise<any> => {
    const sns = new AWS.SNS();

    sns.publish(
        {
            TopicArn: getSNSARNName(
                "aws",
                "sns",
                undefined,
                accountId,
                topicName
            ),
            Message: JSON.stringify(message)
        },
        function(err, data) {
            if (err) {
                console.error(err.stack);
                return Promise.reject("Could not push to SNS");
            }
            console.log("push sent");
            console.log(data);

            return Promise.resolve(data);
        }
    );
};

const sendOpportunityToSNS = async (event: FunctionEvent) => {
    try {
        const env = process.env.env;
        const apiId = api.ukri.output.GraphQLAPIIdOutput;

        if (!env || !event.source) {
            console.error("An environment and opportunity id must be set");
            throw new Error("Opportunity can't be found");
        }

        const topicName = getTopicName(topic, env);
        await postSNSMessage(topicName, apiId, event.source);
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
