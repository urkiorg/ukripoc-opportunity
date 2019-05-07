import React, { Component } from "react";

import "./App.scss";

import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";

import config from "./aws-exports";
import API, { graphqlOperation } from "@aws-amplify/api";

import AWSAppSyncClient from "aws-appsync";
import { ApolloProvider, Query, Mutation } from "react-apollo";
import { Rehydrated } from "aws-appsync-react";

import { NewOpportunity } from "./components/NewOpportunity";
import { AllOpportunities } from "./components/AllOpportunities";

import Main from "@govuk-react/main";

const client = new AWSAppSyncClient({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
        type: config.aws_appsync_authenticationType,
        apiKey: config.aws_appsync_apiKey
        // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
    }
});

Amplify.configure(config);

// API.configure(config);

// retrieve temporary AWS credentials and sign requests
Auth.configure(config);
class App extends Component {
    render() {
        return (
            <Main>
                <ApolloProvider client={client}>
                    <Rehydrated>
                        <div className="App">
                            <NewOpportunity />
                            <AllOpportunities />
                        </div>
                    </Rehydrated>
                </ApolloProvider>
            </Main>
        );
    }
}

window.LOG_LEVEL = "DEBUG";

export default App;
