import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import SetupOpportunity from "../SetupOpportunity/SetupOpportunity";

const GET_OPP = gql(getOpportunity);

export const SetupOpportunityPage: FC = (props: any) => {
    const opportunityId = props.opportunityId;
    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        },
        fetchPolicy: "cache-and-network"
    });

    return <SetupOpportunity opportunity={data} />;
};

export default SetupOpportunityPage;
