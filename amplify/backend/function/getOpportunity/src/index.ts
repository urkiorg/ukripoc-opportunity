import awsServerlessExpress from "aws-serverless-express";
import { Handler } from "aws-lambda";
import app from "./app";

const server = awsServerlessExpress.createServer(app);

export const handler: Handler = (event: ListingEvent, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    awsServerlessExpress.proxy(server, event, context);
};