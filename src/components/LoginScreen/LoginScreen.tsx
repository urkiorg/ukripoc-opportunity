import React, { FC, useState } from "react";
import { H2, H3 } from "@govuk-react/heading";
import { ukriGreen } from "../../theme";
import Input from "@govuk-react/input";
import Checkbox from '@govuk-react/checkbox';
import Button from '@govuk-react/button';
import LabelText from '@govuk-react/label-text';
import styles from "./LoginScreen.module.scss";

interface Props {
}

export const LoginScreen: FC<Props> = ({}) => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [persistedLogin, setPersistedLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    const onInputChangeUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const onInputChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const togglePersistedLogin = () => {
        setPersistedLogin(!persistedLogin);
    }

    const login = () => {
        console.log("Make request");
    }

    return (
        <div>
            <H3>Welcome</H3>
            <H2 textColour={ukriGreen}>Please log in</H2>
            <LabelText>Username</LabelText>
            <Input className={styles.input} value={username} onChange={onInputChangeUsername} />
            <LabelText>Password</LabelText>
            <Input className={styles.input} value={password} onChange={onInputChangePassword} />
            <Checkbox onChange={togglePersistedLogin}>Keep me logged in</Checkbox>
            <Button buttonColour={ukriGreen} onClick={login}>Login</Button>
        </div>
    );
};

export default LoginScreen;
