import React, { FC, useState } from "react";
import { ukriGreen, Title } from "../../theme";
import Input from "@govuk-react/input";
import Button from '@govuk-react/button';
import LabelText from '@govuk-react/label-text';
import ErrorSummary from '@govuk-react/error-summary';
import { navigate } from "@reach/router";
import ErrorText from '@govuk-react/error-text';
import { Auth } from "aws-amplify";
import Caption from '@govuk-react/caption';

import styles from "./LoginScreen.module.scss";

interface Props {
    override?: string;
}

export const LoginScreen: FC<Props> = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [persistedLogin, setPersistedLogin] = useState(false);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usernameWarning, setUsernameWarning] = useState(false);
    const [passwordWarning, setPasswordWarning] = useState(false);

    const onInputChangeUsername = (e: any) => {
        setUsername(e.target.value);
    }

    const onInputChangePassword = (e: any) => {
        setPassword(e.target.value);
    }

    const togglePersistedLogin = () => {
        setPersistedLogin(!persistedLogin);
    }

    const validateInput = () => {
        if (username.length === 0) {
            setUsernameWarning(true)
        } else {
            setUsernameWarning(false)
        }

        if (password.length === 0) {
            setPasswordWarning(true);
        } else {
            setPasswordWarning(false);
        }
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        validateInput();

        if (password.length > 0 && username.length > 0) {
            try {
                await Auth.signIn(username, password);
                setLoading(false);
                setError(false)
                navigate(`/`);
                window.location.reload();
            } catch(error) {
                setError(true)
                setLoading(false);
            }
        } else {
            setLoading(false);
        }
    }

    return (
        <div>
            { error &&
                <ErrorSummary
                    heading={"Your sign in was unsuccessful because of the following issues"}
                    description={"Your email/password combination doesn't seem to work."}
                    />
            }
            <Caption>Welcome</Caption>
            <Title>Please log in</Title>
            <form onSubmit={handleSubmit}>
                <LabelText>Username</LabelText>
                { usernameWarning && <ErrorText>"Please enter your username."</ErrorText> }
                <Input error={error || usernameWarning} type="email" className={styles.input} value={username} onChange={onInputChangeUsername} />
                <LabelText>Password</LabelText>
                { passwordWarning && <ErrorText>"Please enter your password."</ErrorText> }
                <Input error={error || usernameWarning} type="password" className={styles.input} value={password} onChange={onInputChangePassword} />
                <Button disabled={loading} onClick={handleSubmit} buttonColour={ukriGreen}>{loading ? "Please wait" : "Login"}</Button>
            </form>
        </div>
    );
};

export default LoginScreen;
