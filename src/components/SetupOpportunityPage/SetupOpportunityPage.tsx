import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import SetupOpportunity from "../SetupOpportunity/SetupOpportunity";
import { updateWebsiteListing } from "../../graphql/mutations";
import { UpdateWebsiteListingMutationVariables } from "../../API";


const GET_OPP = gql(getOpportunity);
const UPDATE_WEBSITE_RANKING = gql(updateWebsiteListing);

export const SetupOpportunityPage: FC = (props: any) => {
    const opportunityId = props.opportunityId;
    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        },
        fetchPolicy: "cache-and-network"
    });
    const updateWebsiteRankingMutation = useMutation<
        UpdateWebsiteListingMutationVariables
    >(UPDATE_WEBSITE_RANKING);

    const updateOpportunityRanking = useCallback(
        async (id, rank) => {
            const result = await updateWebsiteRankingMutation({
                variables: {
                    // id, rank
                    input: { id, rank }
                }
            });
            const { data, loading, error } = result;
            console.log("data, loading, error:", data, loading, error);
        },
        [updateWebsiteRankingMutation]
    );

    return <SetupOpportunity
                updateOpportunityRanking={updateOpportunityRanking}
                opportunity={data} />;
};

export default SetupOpportunityPage;
