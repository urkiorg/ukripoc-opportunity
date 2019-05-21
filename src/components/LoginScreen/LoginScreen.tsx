import React, { FC, useState } from "react";
import { H2, H3 } from "@govuk-react/heading";
import { ukriGreen } from "../../theme";
import Input from "@govuk-react/input";
import Checkbox from '@govuk-react/checkbox';
import Button from '@govuk-react/button';
import LabelText from '@govuk-react/label-text';
import styles from "./LoginScreen.module.scss";
import { Auth } from "aws-amplify";
import { navigate } from "@reach/router";

interface Props {
    override?: string;
}

export const LoginScreen: FC<Props> = (props) => {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [persistedLogin, setPersistedLogin] = useState(false);
    const [loading, setLoading] = useState(false);

    console.log(props);

    const onInputChangeUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const onInputChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const togglePersistedLogin = () => {
        setPersistedLogin(!persistedLogin);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        try {
            await Auth.signIn(username, password);
            setLoading(false);
            navigate(`/`)
        } catch(error) {
            console.log("Error!", error)
            setLoading(false);
        }
    }

    return (
        <div>
            <H3>Welcome</H3>
            <H2 textColour={ukriGreen}>Please log in</H2>
            <form onSubmit={handleSubmit}>
                <LabelText>Username</LabelText>
                <Input className={styles.input} value={username} onChange={onInputChangeUsername} />
                <LabelText>Password</LabelText>
                <Input type="password" className={styles.input} value={password} onChange={onInputChangePassword} />
                <Checkbox onChange={togglePersistedLogin}>Keep me logged in</Checkbox>
                <Button type="submit" buttonColour={ukriGreen}>Login</Button>
            </form>
        </div>
    );
};

export default LoginScreen;
