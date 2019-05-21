import React, { FC } from "react";
import { LoginScreen } from "../LoginScreen";

interface Props {
    authState?: string;
}

export const AuthController: FC<Props> = (props) => 
    <div>
        { props.authState === "signIn"  && <LoginScreen override={'SignIn'}/> }
        { props.authState === "signedIn" && props.children }
    </div>

