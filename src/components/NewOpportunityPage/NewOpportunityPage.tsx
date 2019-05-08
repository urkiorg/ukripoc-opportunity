import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation } from "react-apollo-hooks";
import { createOpportunity } from "../../graphql/mutations";
import NewOpportunity from "../NewOpportunity/NewOpportunity";

const CREATE_OPPORTUNITY = gql(createOpportunity);

export const NewOpportunityPage: FC = () => {
    const addOpportunityMutation = useMutation(CREATE_OPPORTUNITY);

    const addOpportunity = useCallback(
        (name: string) => {
            console.log("Add opportunity", name);
            const fee = addOpportunityMutation({
                variables: { input: { name, description: "Today" } }
            });
            console.log(fee);
        },
        [addOpportunityMutation]
    );

    return <NewOpportunity addOpportunity={addOpportunity} />;
};

export default NewOpportunityPage;
