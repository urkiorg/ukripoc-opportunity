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
            //each of the funders

            //if in current ignore //touch in array

            //if not selected then delete from array

            //if not found then just add it...
            const result = addFunder(opportunity);

            console.log(result);
        },
        [hello]
    );

    function hello() {
        console.log(111);
    }

    return (
        <SetupFunders
            funders={funders}
            opportunityLoaded={opportunity}
            updateOpportunity={updateOpportunity}
        />
    );
};

export default SetupFundersPage;
