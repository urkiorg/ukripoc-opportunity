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

export const getSNSARNName = (
    partition: string,
    service: string,
    region: string = "eu-west-1",
    accountId: string,
    topicName: string
): string => `arn:${partition}:${service}:${region}:${accountId}:${topicName}`;

const setListingLastPublished = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityRecord: Opportunity,
    listing: WebsiteListing
) => {
    const opportunityListings = opportunityRecord.websiteListings
        ? opportunityRecord.websiteListings.reduce(
              (acc, current) => {
                  if (current.id === listing.id) {
                      return [...acc, listing];
                  } else {
                      return [...acc, current];
                  }
              },
              [] as WebsiteListing[]
          )
        : undefined;

    if (!opportunityListings) {
        return;
    }

    opportunityRecord.websiteListings = opportunityListings;

    await client
        .put({
            TableName,
            Item: {
                ...opportunityRecord
            }
        })
        .promise();
};

const getListing = (
    opportunityRecord: Opportunity,
    listingId: string
): WebsiteListing[] => {
    if (
        opportunityRecord &&
        opportunityRecord.websiteListings &&
        opportunityRecord.websiteListings.length
    ) {
        return opportunityRecord.websiteListings.filter(listing => {
            return listing.id === listingId;
        });
    }
    return [];
};

const getOpportunity = async (
    client: AWS.DynamoDB.DocumentClient,
    TableName: string,
    opportunityId: string
): Promise<Opportunity> => {
    let result = await client
        .get({ TableName, Key: { id: opportunityId } })
        .promise();

    return result.Item as any;
};

const postSNSMessage = async (
    topicName: string,
    accountId: string,
    message: any
): Promise<AWS.SNS.PublishResponse> => {
    const sns = new AWS.SNS();

    return new Promise((resolve, reject) => {
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
                    reject("Could not push to SNS");
                }
                console.log("push sent");
                console.log(data);

                resolve(data);
            }
        );
    });
};

// declare a new express app
const app = express();
app.use(bodyParser.json());

if (process.env && process.env.env && process.env.env !== "sunyadev") {
    app.use(awsServerlessExpressMiddleware.eventContext());
}

// Enable CORS for all methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});

// 1. get listing id, opportunity id from post
// 2. get listing from DynamoDb
// 3. add listing in format provided in full-event.json to SNS
// 4. add `lastPublished` to listing in DynamoDb

app.post("/opportunity-listing/publish", async (req, res) => {
    try {
        const { listingId, opportunityId } = req.body;
        const env = process.env.env;
        const apiId = api.ukri.output.GraphQLAPIIdOutput;

        if (!env || !listingId) {
            console.error("There is no environment or listing id");
            return res.status(404).json({});
        }

        const client = new AWS.DynamoDB.DocumentClient({
            region: "eu-west-1"
        });

        const TableName = getDBTableName(env, apiId, "Opportunity");
        const opportunity = await getOpportunity(
            client,
            TableName,
            opportunityId
        );
        const listingArr = getListing(opportunity, listingId);
        const now = new Date().toISOString();

        if (!listingArr.length) {
            console.error(
                `The listing, ${listingId} is not part of the opportunity, ${opportunityId}`
            );

            throw new Error(`The listing couldn't be found in the opportunity`);
        }
        const listing = listingArr[0];

        listing.lastPublished = now;
        setListingLastPublished(client, TableName, opportunity, listing);

        const message: ListingEvent = {
            id: listing.id,
            opportunityId: opportunity.id,
            name: opportunity.name,
            description: listing.description ? listing.description : undefined,
            funders: opportunity.funders,
            openDate: opportunity.openDate ? opportunity.openDate : undefined,
            closeDate: opportunity.closeDate
                ? opportunity.closeDate
                : undefined,
            lastPublished: listing.lastPublished
        };

        const post = await postSNSMessage(
            "OpportunityListingUpdate",
            "475991803334",
            message
        );

        if (post) {
            res.json({
                success: "Website listing success.",
                url: req.url,
                body: req.body
            });
        } else {
            console.error(
                "There was an error processing the listing publish event: "
            );
            return res.status(404).json({});
        }
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
