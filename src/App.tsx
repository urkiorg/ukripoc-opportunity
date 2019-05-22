import React, { FC, useState, useEffect } from "react";
import Amplify from "aws-amplify";
import Auth from "@aws-amplify/auth";
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

// Use on logout button
// const logout = () => {
//     try {
//         setLoggedIn(false);
//         Auth.signOut();
//     } catch(error) {
//         console.log("Error!", error)
//     }
// }

// retrieve temporary AWS credentials and sign requests
Auth.configure(config);

export const App: FC = (props: any) => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuthenticatedUser = async () => {
            try {
                const user = await Auth.currentAuthenticatedUser();
                console.log("user", user);
                setLoggedIn(true);
            } catch {
                setLoggedIn(false);
            }
        };
        checkAuthenticatedUser();
    });

    const handleAuthStateChange = (state: any) => {
        if (state === "signedIn") {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    };

    return (
        // See https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/166 for why we need to coerce to any
        <ApolloProvider client={client as any}>
            <ApolloHooksProvider client={client as any}>
                <Rehydrated>
                    <UkriHeader />
                    <Main>
                        <Authenticator
                            authState="signIn"
                            hideDefault={true}
                            onStateChange={handleAuthStateChange}
                        >
                            <AuthController loggedIn={loggedIn}>
                                <Router>
                                    <Route
                                        component={AllOpportunities}
                                        path="/all"
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
