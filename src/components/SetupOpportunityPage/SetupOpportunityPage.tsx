import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import SetupOpportunity from "../SetupOpportunity/SetupOpportunity";

const GET_OPP = gql(getOpportunity);

export const SetupOpportunityPage: FC = () => {
    const id = "675c0700-09c3-4b1c-9292-71f96ef0567e";

    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: id
        }
    });

    return <SetupOpportunity opportunity={data} />;
};

export default SetupOpportunityPage;
