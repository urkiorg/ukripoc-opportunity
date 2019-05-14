import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import { createOpportunity } from "../../graphql/mutations";
import NewOpportunity from "../NewOpportunity/NewOpportunity";
import { navigate } from "@reach/router";

const CREATE_OPPORTUNITY = gql(createOpportunity);

export const NewOpportunityPage: FC = () => {
    const addOpportunityMutation = useMutation(CREATE_OPPORTUNITY);

    const addOpportunity = useCallback(
        async (name: string) => {
            const result = await addOpportunityMutation({
                variables: { input: { name, description: "Today" } }
            });

            const { data, loading, error } = result;

            if (data) {
                navigate(`/setup/${data.createOpportunity.id}`);
            }
        },
        [addOpportunityMutation]
    );

    return <NewOpportunity addOpportunity={addOpportunity} />;
};

export default NewOpportunityPage;
