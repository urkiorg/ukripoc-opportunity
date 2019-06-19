import express from "express";
import bodyParser from "body-parser";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import AWS from "aws-sdk";
import console = require("console");

AWS.config.region = "eu-west-1";

// Helper functions
const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

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

// Setup app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");

    // res.header(
    //     "Access-Control-Allow-Headers",
    //     "Origin, X-Requested-With, Content-Type, Accept"
    // );

    next();
});
if (process.env && process.env.env) {
    app.use(awsServerlessExpressMiddleware.eventContext());
}

// Get an opportunity with the lowest ranking application
// 1. get opportunity using id from query param
// 2. get all applications for opportunity
// 3. return the opportunity with the lowest ranking applications
app.get("/opportunity/retrieve/:id", async (req, res) => {
    const opportunityId = req.params.id;
    // const opportunityId = req.pathParameters.proxy;
    const env = process.env.ENV;
    const apiId = process.env.AppSyncApiId;

    if (!env || !apiId || !opportunityId) {
        console.error(
            "An environment, api id and opportunity id must be provided"
        );
        return res.status(404).json({});
    }

    const client = new AWS.DynamoDB.DocumentClient({
        region: "eu-west-1"
    });
    const opportunityTableName = getDBTableName(env, apiId, "Opportunity");

    // Get opportunity
    const opportunity = await getOpportunity(
        client,
        opportunityTableName,
        opportunityId
    );

    if (!opportunity) {
        console.error(`The opportunity ${opportunityId} was not found`);
        throw new Error(`Opportunity not found`);
    }

    // Extract application info
    const applicationTableName = getDBTableName(env, apiId, "Application");
    const applications = await getApplications(
        client,
        applicationTableName,
        opportunityId
    );

    const lowestRankedApplication = () => {
        const sortedApplicationsArray = applications.sort((a, b) => {
            if (a.rank && b.rank) {
                return a.rank - b.rank;
            } else {
                return -1;
            }
        });

        return sortedApplicationsArray[0] || {};
    };

    const opportunityWithLowestRankedApplication = {
        ...opportunity,
        lowestRankedApplication: lowestRankedApplication()
    };

    res.json(opportunityWithLowestRankedApplication);
});

app.listen(3000, () => {
    console.log("get opportunity listing started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
export default app;
