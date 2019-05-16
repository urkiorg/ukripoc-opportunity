import React, { FC, HTMLAttributes, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import funders from "../../fixtures/funders.json";
import { SetupFunders } from "../SetupFunders";

import { getOpportunity } from "../../graphql/queries";
import { updateOpportunity } from "../../graphql/mutations";

import { navigate } from "@reach/router";
import { UpdateOpportunityMutationVariables } from "../../API";

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPPORTUNITY = gql(getOpportunity);

const UPDATE_OPPORTUNITY = gql(updateOpportunity);

export const SetupFundersPage: FC = (props: any) => {
    //fetch
    const opportunityId = props.opportunityId;
    console.log(opportunityId);
    const { data, loading, error } = useQuery(GET_OPPORTUNITY, {
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
        async (name: any) => {
            const result = await addFunderMutation({
                variables: {
                    input: {
                        id: opportunityId,
                        funders: name
                    }
                }
            });
            const { data, loading, error } = result;
        },
        [addFunderMutation]
    );

    const updateOpportunity = useCallback(async (opportunity: any) => {
        const result = addFunder(opportunity);
    }, []);

    return (
        <SetupFunders
            funders={funders}
            currentOpportunity={opportunity}
            fundersChanged={updateOpportunity}
        />
    );
};

export default SetupFundersPage;
