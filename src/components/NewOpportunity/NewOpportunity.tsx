import React, { FC, HTMLAttributes, useState, useCallback } from "react";
import cx from "classnames";
import styles from "./NewOpportunity.module.scss";
import Button from "@govuk-react/button";

import { ApolloProvider, Mutation } from "react-apollo";
import gql from "graphql-tag";

import Heading from "@govuk-react/heading";
import Details from "@govuk-react/details";
import Input from "@govuk-react/input";

import { H1, H2, H4 } from "@govuk-react/heading";

interface Props extends HTMLAttributes<HTMLElement> {}

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
    const [newOpportunityName, setNewOpportunityName] = useState("");

    const onInputChange = useCallback(
        event => setOpportunityName(event.target.value),
        []
    );

    const onSubmit = (e: Event) => {
        console.log("submitted!");
    };

    function updateSetup(data: any) {
        const cleanData = data.createOpportunity;
        setNewOpportunityName(cleanData.id + " " + cleanData.name);
        newOpp();
    }

    function newOpp() {
        if (newOpportunityName !== "") {
            return (
                <div>
                    <h4> {newOpportunityName} </h4>
                    <h1> Opportunity Details</h1>
                </div>
            );
        }
    }

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

            <Mutation
                mutation={ADD_OPP}
                variables={{ name: opportunityName }}
                onCompleted={(data: any) => updateSetup(data)}
            >
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

            {newOpp()}
        </div>
    );
};

export default NewOpportunity;
