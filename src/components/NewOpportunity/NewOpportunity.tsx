import React, { FC, HTMLAttributes, useState, useCallback } from "react";
import cx from "classnames";
import styles from "./NewOpportunity.module.scss";
import Button from "@govuk-react/button";

import { ApolloProvider, Mutation } from "react-apollo";
import gql from "graphql-tag";

import Heading from "@govuk-react/heading";
import Details from "@govuk-react/details";
import Input from "@govuk-react/input";

interface Props extends HTMLAttributes<HTMLElement> {}

const WHAT_THERE = "WHATWHATWHAT";

const ADD_OPP = gql`
    mutation($name: String!) {
        createOpportunity(input: { name: $name, description: "Today" }) {
            id
            name
        }
    }
`;

export const NewOpportunity: FC<Props> = ({ className, ...props }) => {
    const [opportunityName, setOpportunityName] = useState("");

    const onInputChange = useCallback(
        event => setOpportunityName(event.target.value),
        []
    );

    const onSubmit = (e: Event) => {
        console.log("submitted!");
    };

    return (
        <div className={cx(styles.wrap, className)} {...props}>
            <Heading>New opportunity</Heading>

            <Details summary="How should I name my opportunity?">
                Give your opportunity a name that will help potential applicants
                understand what the opportunity is about. You don't need to add
                tags (such as the year) into opportunity names. Opportunities
                will be tagged automatically based on other information you
                input.
            </Details>

            <Input onKeyUp={(e: Event) => onInputChange(e)} />

            <br />

            <br />

            <Mutation mutation={ADD_OPP} variables={{ name: opportunityName }}>
                {(postMutation: any, { data }: any) => (
                    <form
                        onSubmit={e => {
                            e.preventDefault();
                            postMutation({
                                variables: { name: opportunityName }
                            });
                        }}
                    >
                        <Button type="submit">Create opportunity</Button>
                    </form>
                )}
            </Mutation>
        </div>
    );
};

export default NewOpportunity;
