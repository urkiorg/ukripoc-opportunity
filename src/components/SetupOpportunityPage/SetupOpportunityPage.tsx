import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";
import { updateOpportunity } from "../../graphql/mutations";
import SetupOpportunity from "../SetupOpportunity/SetupOpportunity";
import { UpdateOpportunityMutation } from "../../API";
import { navigate } from "@reach/router";
import {
    updateWebsiteListing,
    updateApplication
} from "../../graphql/mutations";
import {
    UpdateWebsiteListingMutationVariables,
    UpdateApplicationMutation
} from "../../API";

const GET_OPP = gql(getOpportunity);
const UPDATE_WEBSITE_RANKING = gql(updateWebsiteListing);
const UPDATE_APPLICATION = gql(updateApplication);
const UPDATE_OPPORTUNITY = gql(updateOpportunity);

interface Props extends React.HTMLAttributes<HTMLElement> {
    opportunityId?: string;
}

export const SetupOpportunityPage: FC<Props> = ({ opportunityId }) => {
    const { data } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        },
        fetchPolicy: "cache-and-network"
    });
    const updateWebsiteRankingMutation = useMutation<
        UpdateWebsiteListingMutationVariables
    >(UPDATE_WEBSITE_RANKING);
    const updateApplicationRankingMutation = useMutation<
        UpdateApplicationMutation
    >(UPDATE_APPLICATION);

    const updateWebsiteListingRanking = useCallback(
        async (id, rank) => {
            await updateWebsiteRankingMutation({
                variables: {
                    input: { id, rank }
                }
            });
        },
        [updateWebsiteRankingMutation]
    );

    const updateApplicationRanking = useCallback(
        async (id, rank) => {
            updateApplicationRankingMutation({
                variables: {
                    input: { id, rank }
                }
            });
        },
        [updateApplicationRankingMutation]
    );

    const updateOpportunityMutation = useMutation<UpdateOpportunityMutation>(
        UPDATE_OPPORTUNITY
    );

    const finishOpportunity = useCallback(async () => {
        const result = await updateOpportunityMutation({
            variables: {
                input: { id: opportunityId, typeComplete: true }
            }
        });

        const { res, loading, error } = result;
        // @todo handle errrrorrr

        if (res) {
            navigate(`/`);
        }
    }, [updateOpportunityMutation, opportunityId]);

    return (
        <SetupOpportunity
            opportunity={data}
            finishOpportunity={finishOpportunity}
            updateApplicationRanking={updateApplicationRanking}
            updateWebsiteListingRanking={updateWebsiteListingRanking}
        />
    );
};

export default SetupOpportunityPage;
