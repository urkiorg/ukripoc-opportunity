import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
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

const GET_OPP = gql`
    query GetOpportunity($id: ID!) {
        getOpportunity(id: $id) {
            id
            name
            description
            funders
            fundersComplete
            opportunityComplete
            websiteListings {
                items {
                    id
                    rank
                    lastPublished
                    description
                }
                nextToken
            }
            application {
                items {
                    id
                    rank
                    openApplication
                    closeApplication
                    applicationQuestions {
                        items {
                            id
                            heading
                            title
                            subtitle
                            notes
                            wordLimit
                            complete
                        }
                        nextToken
                    }
                }
                nextToken
            }
        }
    }
`;

export type GetOpportunityQueryWithQuestions = {
    getOpportunity: {
        __typename: "Opportunity";
        id: string;
        name: string;
        description: string | null;
        funders: Array<string | null> | null;
        fundersComplete: boolean | null;
        opportunityComplete: boolean | null;
        websiteListings: {
            __typename: "ModelWebsiteListingConnection";
            items: Array<{
                __typename: "WebsiteListing";
                id: string;
                rank: number;
                lastPublished: string | null;
                description: string | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
        application: {
            __typename: "ModelApplicationConnection";
            items: Array<{
                __typename: "Application";
                id: string;
                rank: number;
                openApplication: string | null;
                closeApplication: string | null;
                applicationQuestions: {
                    __typename: "ModelApplicationQuestionConnection";
                    items: Array<{
                        __typename: "ApplicationQuestion";
                        id: string;
                        heading: string | null;
                        title: string | null;
                        subtitle: string | null;
                        notes: string | null;
                        wordLimit: number | null;
                        complete: boolean | null;
                    } | null> | null;
                    nextToken: string | null;
                } | null;
            } | null> | null;
            nextToken: string | null;
        } | null;
    } | null;
};

const UPDATE_WEBSITE_RANKING = gql(updateWebsiteListing);
const UPDATE_APPLICATION = gql(updateApplication);
const UPDATE_OPPORTUNITY = gql(updateOpportunity);

interface Props extends React.HTMLAttributes<HTMLElement> {
    opportunityId?: string;
}

export const SetupOpportunityPage: FC<Props> = ({ opportunityId }) => {
    const { data, loading } = useQuery(GET_OPP, {
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
            await updateApplicationRankingMutation({
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
                input: { id: opportunityId, opportunityComplete: true }
            }
        });

        const { res } = result;
        // @todo handle errrrorrr

        if (res) {
            navigate(`/`);
        }
    }, [updateOpportunityMutation, opportunityId]);

    return (
        <SetupOpportunity
            opportunity={data}
            finishOpportunity={finishOpportunity}
            loading={loading}
            updateApplicationRanking={updateApplicationRanking}
            updateWebsiteListingRanking={updateWebsiteListingRanking}
        />
    );
};

export default SetupOpportunityPage;
