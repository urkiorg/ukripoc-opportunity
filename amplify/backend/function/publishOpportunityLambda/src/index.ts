const awsServerlessExpress = require("aws-serverless-express");
const publishOpportunityAPI = require("./app");

const server = awsServerlessExpress.createServer(publishOpportunityAPI);

exports.handler = (event, context) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    awsServerlessExpress.proxy(server, event, context);
};
