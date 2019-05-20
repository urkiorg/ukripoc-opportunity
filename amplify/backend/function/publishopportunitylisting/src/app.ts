/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/

import express from "express";
import bodyParser from "body-parser";
import awsServerlessExpressMiddleware from "aws-serverless-express/middleware";
import AWS from "aws-sdk";

import { api } from "../../../amplify-meta.json";

AWS.config.region = "eu-west-1";

export const getDBTableName = (env: string, apiId: string, type: string) =>
    `${type}-${apiId}-${env}`;

const getListing = async (
    apiId: string,
    opportunityId: string,
    listingId: string,
    env: string
) => {
    const client = new AWS.DynamoDB.DocumentClient({
        region: "eu-west-1"
    });

    const TableName = getDBTableName(env, apiId, "Opportunity");
    // const now = new Date().toISOString();

    let result = await client
        .get({ TableName, Key: { id: opportunityId } })
        .promise();

    const Item: Opportunity | undefined = result.Item as any;

    if (Item && Item.websiteListings && Item.websiteListings.length) {
        return Item.websiteListings.filter(listing => {
            return listing.description === listingId;
        });
    }

    return [];

    //     console.log("New item");
    //     Item = {
    //         __typename: "Opportunity",
    //         createdAt: now,
    //         updatedAt: now
    //     };
    // } else {
    //     console.log("Updated item");

    //     Item.updatedAt = now;
    // }

    // await client
    //     .put({
    //         TableName,
    //         Item: {
    //             ...Item,
    //             id,
    //             name,
    //             description,
    //             openDate,
    //             closeDate,
    //             funders
    //         }
    //     })
    //     .promise();

    // context.done(undefined, "Success");
};

// declare a new express app
const app = express();
app.use(bodyParser.json());
// app.use(awsServerlessExpressMiddleware.eventContext());

// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// 1. get listing id from post
// 2. get listing from DynamoDb
// 3. add listing in format provided in full-event.json to SNS
// 4. add `lastPublished` to listing in DynamoDb

app.post("/opportunity-listing/publish", async (req, res) => {
    try {
        // Add your code here
        // const sns = new AWS.SNS();

        const { listingId, opportunityId } = req.body;
        const env = process.env.env;
        const apiId = api.ukri.output.GraphQLAPIIdOutput;

        if (!env || !listingId) {
            console.error("There is no environment or listing id");
            return res.status(404).json({});
        }

        const fullListing = await getListing(
            apiId,
            opportunityId,
            listingId,
            env
        );

        console.log({ fullListing });

        // sns.publish(
        //     {
        //         Message: fullListing,

        //         // @todo CF template for this
        //         TopicArn: "TOPIC_ARN"
        //     },
        //     function(err, data) {
        //         if (err) {
        //             console.log(err.stack);
        //             return;
        //         }
        //         console.log("push sent");
        //         console.log(data);
        //         res.json({
        //             success: "post call succeed!",
        //             url: req.url,
        //             body: req.body
        //         });
        //     }
        // );
    } catch (error) {
        console.error(
            "There was an error processing the listing publish event: ",
            error
        );
        return res.status(404).json({});
    }
});

app.listen(3000, function() {
    console.log("publish opportunity listing started");
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
export default app;
