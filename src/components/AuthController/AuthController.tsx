import React, { FC } from "react";
import { LoginScreen } from "../LoginScreen";

interface Props {
    loggedIn: boolean;
}

export const AuthController: FC<Props> = (props) => 
    <div>
        { props.loggedIn ? props.children : <LoginScreen override={'SignIn'}/> }
    </div>
