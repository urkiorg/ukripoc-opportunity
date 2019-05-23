import React, { FC, useState, useEffect, useCallback } from "react";
import Amplify, { Hub } from "aws-amplify";
import Auth, { CognitoUser } from "@aws-amplify/auth";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { Rehydrated } from "aws-appsync-react";
import Main from "@govuk-react/main";
import { Router, Link, RouteComponentProps } from "@reach/router";
import { Route } from "./components/Route";
import { AllOpportunities } from "./components/AllOpportunities";
import { NewOpportunityPage } from "./components/NewOpportunityPage";
import { SetupOpportunityPage } from "./components/SetupOpportunityPage";
import config from "./aws-exports";
import { SetupFundersPage } from "./components/SetupFundersPage";
import { UkriHeader } from "./components/UkriHeader";
import { UkriFooter } from "./components/UkriFooter";
import { AuthController } from "./components/AuthController";

import { Authenticator } from "aws-amplify-react";

import "./assets/fonts/stylesheet.css";
import { HubCallback } from "@aws-amplify/core/lib/Hub";

const client = new AWSAppSyncClient({
    url: config.aws_appsync_graphqlEndpoint,
    region: config.aws_appsync_region,
    auth: {
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        // apiKey: config.aws_appsync_apiKey
        jwtToken: async () =>
            (await Auth.currentSession()).getAccessToken().getJwtToken()
    }
});

Amplify.configure(config);

// retrieve temporary AWS credentials and sign requests
Auth.configure(config);

export const App: FC = (props: any) => {
    const [user, setUser] = useState<CognitoUser | undefined>(undefined);

    useEffect(() => {
        const checkAuthenticatedUser = async () => {
            try {
                const u = await Auth.currentAuthenticatedUser();
                console.log("user", user);
                setUser(u);
            } catch {
                setUser(undefined);
            }
        };
        checkAuthenticatedUser();
    });
    const handleAuthStateChange: HubCallback = useCallback(
        async data => {
            const state = data.payload.event;

            console.log("state", state);
            if (state === "signedIn" || state === "signIn") {
                const u = await Auth.currentAuthenticatedUser();
                console.log("user", user);
                setUser(u);
            } else {
                setUser(undefined);
            }
        },
        [setUser]
    );

    useEffect(() => {
        Hub.listen("auth", handleAuthStateChange);
        return () => Hub.remove("auth", handleAuthStateChange);
    }, [handleAuthStateChange]);

    return (
        // See https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/166 for why we need to coerce to any
        <ApolloProvider client={client as any}>
            <ApolloHooksProvider client={client as any}>
                <Rehydrated>
                    <UkriHeader user={user} />
                    <Main>
                        <Authenticator authState="signIn" hideDefault={true}>
                            <AuthController loggedIn={!!user}>
                                <Router>
                                    <Route
                                        component={AllOpportunities}
                                        path="/"
                                    />

                                    <Route
                                        component={NewOpportunityPage}
                                        path="/opportunity"
                                    />

                                    <Route
                                        component={SetupOpportunityPage}
                                        path="/setup/:opportunityId"
                                    />

                                    <Route
                                        component={SetupOpportunityPage}
                                        path="/setup/:opportunityId"
                                    />

                                    <Route
                                        component={SetupFundersPage}
                                        path="/setup/:opportunityId/funders"
                                    />
                                </Router>
                            </AuthController>
                        </Authenticator>
                    </Main>
                    <UkriFooter />
                </Rehydrated>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
};

(window as any).LOG_LEVEL = "DEBUG";

export default App;
