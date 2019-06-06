import React, { FC, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import funders from "../../fixtures/funders.json";
import { SetupFunders } from "../SetupFunders";

import { getOpportunity } from "../../graphql/queries";
import { updateOpportunity } from "../../graphql/mutations";

import { navigate } from "@reach/router";
import { UpdateOpportunityMutationVariables } from "../../API";

const GET_OPPORTUNITY = gql(getOpportunity);

const UPDATE_OPPORTUNITY = gql(updateOpportunity);

export const SetupFundersPage: FC = (props: any) => {
    //fetch

    console.log(props);
    const opportunityId = props.opportunityId;
    console.log(opportunityId);
    const { data } = useQuery(GET_OPPORTUNITY, {
        variables: {
            id: opportunityId
        }
    });

    const opportunity = data;

    const addFunderMutation = useMutation<
        {},
        UpdateOpportunityMutationVariables
    >(UPDATE_OPPORTUNITY);

    const addFunder = useCallback(
        async (name: string[]) => {
            await addFunderMutation({
                variables: {
                    input: {
                        id: opportunityId,
                        funders: name,
                        fundersComplete: true
                    }
                }
            });

            navigate(`/setup/${opportunityId}`);
        },
        [addFunderMutation, opportunityId]
    );

    const updateOpportunity = useCallback(
        async (funderList: string[]) => addFunder(funderList),
        [addFunder]
    );

    return (
        <SetupFunders
            funders={funders}
            currentOpportunity={opportunity}
            fundersChanged={updateOpportunity}
        />
    );
};

export default SetupFundersPage;
