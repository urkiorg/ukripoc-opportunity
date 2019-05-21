import React, { FC } from "react";
import { LoginScreen } from "../LoginScreen";

interface Props {
    logedIn: boolean;
}

export const AuthController: FC<Props> = (props) => 
    <div>
        { props.logedIn ? props.children : <LoginScreen override={'SignIn'}/> }
    </div>
