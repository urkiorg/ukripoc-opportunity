import React, { FC, useState, useEffect } from "react";
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
import { LoginScreen } from "./components/LoginScreen";
import { AuthController } from "./components/AuthController";

// @ts-ignore
import { Authenticator } from 'aws-amplify-react';

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

const logout = () => {
    try {
        Auth.signOut();
    } catch(error) {
        console.log("Error!", error)
    }
}

// retrieve temporary AWS credentials and sign requests
Auth.configure(config);

export const App: FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuthenticatedUser = async () => {
            try {
                await Auth.currentAuthenticatedUser();
                setLoggedIn(true);
            } catch {
                setLoggedIn(false);
            }
        }
        checkAuthenticatedUser();
    })

    const handleAuthStateChange = (state: any) => {
        if (state === 'signedIn') {
            setLoggedIn(true);
        } else {
            setLoggedIn(false);
        }
    }

    return (
        // See https://github.com/awslabs/aws-mobile-appsync-sdk-js/issues/166 for why we need to coerce to any
        <ApolloProvider client={client as any}>
            <ApolloHooksProvider client={client as any}>
                <Rehydrated>
                    <Main>
                        <Authenticator
                            authState="signIn"
                            hideDefault={true}  
                            onStateChange={handleAuthStateChange}>
                            <AuthController loggedIn={loggedIn}>
                                <Router>
                                    <RouterPage
                                        path="/all"
                                        pageComponent={<AllOpportunities />}
                                    />
                                    <RouterPage
                                        path="/new"
                                        pageComponent={<NewOpportunityPage />}
                                    />
                                    <RouterPage
                                        path="/login"
                                        pageComponent={<LoginScreen />}
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
                                    <br />
                                    <Link to="/login">
                                        <span aria-label="add"> Login </span>
                                    </Link>
                                    <br />
                                        <span onClick={logout}>logout</span>
                                </nav>
                            </AuthController>
                        </Authenticator>
                    </Main>
                </Rehydrated>
            </ApolloHooksProvider>
        </ApolloProvider>
    );
}

const RouterPage = (
    props: { pageComponent: JSX.Element } & RouteComponentProps
) => props.pageComponent;

(window as any).LOG_LEVEL = "DEBUG";

export default (App);
