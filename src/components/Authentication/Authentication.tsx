import React from "react";
import { AuthController } from "./AuthController";

// @ts-ignore
import { Authenticator } from 'aws-amplify-react';

export const Authentication = (props: any) => {
    return (
        <Authenticator hideDefault={true}>
            <AuthController>
                {props.children}
            </AuthController>
        </Authenticator>
    )
}