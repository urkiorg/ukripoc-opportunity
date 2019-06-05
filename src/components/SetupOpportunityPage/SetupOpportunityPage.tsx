import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import SetupOpportunity from "../SetupOpportunity/SetupOpportunity";
import { updateWebsiteListing, updateApplication } from "../../graphql/mutations";
import { UpdateWebsiteListingMutationVariables, UpdateApplicationMutation } from "../../API";


const GET_OPP = gql(getOpportunity);
const UPDATE_WEBSITE_RANKING = gql(updateWebsiteListing);
const UPDATE_APPLICATION = gql(updateApplication);

export const SetupOpportunityPage: FC = (props: any) => {
    const opportunityId = props.opportunityId;
    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        },
        fetchPolicy: "cache-and-network"
    });
    const updateWebsiteRankingMutation = useMutation<UpdateWebsiteListingMutationVariables>(UPDATE_WEBSITE_RANKING);
    const updateApplicationRankingMutation = useMutation<UpdateApplicationMutation>(UPDATE_APPLICATION);

    const updateWebsiteListingRanking = useCallback(
        async (id, rank) => {
            const result = await updateWebsiteRankingMutation({
                variables: {
                    input: { id, rank }
                }
            });
            const { data, loading, error } = result;
            console.log("data, loading, error:", data, loading, error);
        },
        [updateWebsiteRankingMutation]
    );

    const updateApplicationRanking = useCallback(
        async (id, rank) => {
            const result = await updateApplicationRankingMutation({
                variables: {
                    input: { id, rank }
                }
            });
            const { data, loading, error } = result;
            console.log("data, loading, error:", data, loading, error);
        },
        [updateApplicationRankingMutation]
    );

    return (
        <SetupOpportunity
            updateApplicationRanking={updateApplicationRanking}
            updateWebsiteListingRanking={updateWebsiteListingRanking}
            opportunity={data} />
        );
};

export default SetupOpportunityPage;
