import React, { FC } from "react";

import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { Rehydrated } from "aws-appsync-react";
import Main from "@govuk-react/main";

import { Router, Link, RouteComponentProps } from "@reach/router";

import { AllOpportunities } from "./components/AllOpportunities";
import { NewOpportunityPage } from "./components/NewOpportunityPage";

import config from "./aws-exports";

const client = new AWSAppSyncClient({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
        type: config.aws_appsync_authenticationType as AUTH_TYPE,
        apiKey: config.aws_appsync_apiKey
        // jwtToken: async () => token, // Required when you use Cognito UserPools OR OpenID Connect. token object is obtained previously
    }
});

Amplify.configure(config);

// API.configure(config);

// retrieve temporary AWS credentials and sign requests
Auth.configure(config);

export const App: FC = () => (
    // See https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/166 for why we need to coerce to any
    <ApolloProvider client={client as any}>
        <ApolloHooksProvider client={client as any}>
            <Rehydrated>
                <Main>
                    <Router>
                        <RouterPage
                            path="/all"
                            pageComponent={<AllOpportunities />}
                        />
                        <RouterPage
                            path="/new"
                            pageComponent={<NewOpportunityPage />}
                        />
                    </Router>
                    <nav className="primary-nav">
                        <Link to="/all">
                            <span aria-label="all"> All </span>
                        </Link>
                        <br />
                        <Link to="/new">
                            <span aria-label="add"> New </span>
                        </Link>
                    </nav>
                </Main>
            </Rehydrated>
        </ApolloHooksProvider>
    </ApolloProvider>
);

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

(window as any).LOG_LEVEL = "DEBUG";

export default App;
