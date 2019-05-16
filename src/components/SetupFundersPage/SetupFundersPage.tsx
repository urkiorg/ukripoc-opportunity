import React, { FC, HTMLAttributes, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import funders from "../../fixtures/funders.json";
import { SetupFunders } from "../SetupFunders";

import { getOpportunity } from "../../graphql/queries";
import { createFunder } from "../../graphql/mutations";

import { navigate } from "@reach/router";
import {
    UpdateOpportunityMutationVariables,
    CreateFunderMutationVariables
} from "../../API";

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPP = gql(getOpportunity);

const CREATE_FUNDER = gql(createFunder);

export const SetupFundersPage: FC = (props: any) => {
    //fetch
    const opportunityId = props.opportunityId;
    console.log(opportunityId);
    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        }
    });

    const opportunity = data;

    const addFunderMutation = useMutation<{}, CreateFunderMutationVariables>(
        CREATE_FUNDER
    );
    const addFunder = useCallback(
        async (name: string) => {
            const result = await addFunderMutation({
                variables: {
                    input: {
                        name: name,
                        funderOpportunitiesId: opportunityId
                    }
                }
            });

            const { data, loading, error } = result;

            console.log(result);
        },
        [addFunderMutation]
    );

    const updateOpportunity = useCallback(
        async (opportunity: any) => {
            const result = addFunder(opportunity);
        },
        [hello]
    );

    function hello() {
        console.log(111);
    }

    return (
        <SetupFunders
            funders={funders}
            currentOpportunity={opportunity}
            fundersChanged={updateOpportunity}
        />
    );
};

export default SetupFundersPage;
