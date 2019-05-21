import React from "react";
import { LoginScreen } from "../LoginScreen";

export const AuthController = (props: any) => {
    console.log("props: ",props);
    return (
        <div>
            { props.authState === "signIn"  && <LoginScreen override={'SignIn'}/> }
            { props.authState === "signedIn" && props.children }
        </ div>
    )
}
