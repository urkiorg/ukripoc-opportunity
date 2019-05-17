import React, { FC, HTMLAttributes, useCallback, Props } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import funders from "../../fixtures/funders.json";
import { SetupFunders } from "../SetupFunders";

import { getOpportunity } from "../../graphql/queries";
import { updateOpportunity } from "../../graphql/mutations";

import { navigate, RouteComponentProps } from "@reach/router";
import { UpdateOpportunityMutationVariables } from "../../API";

const GET_OPPORTUNITY = gql(getOpportunity);

const UPDATE_OPPORTUNITY = gql(updateOpportunity);

export const SetupFundersPage: FC = (props: any) => {
    //fetch

    console.log(props);
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
        async (name: string[]) => {
            const result = await addFunderMutation({
                variables: {
                    input: {
                        id: opportunityId,
                        funders: name,
                        fundersComplete: true
                    }
                }
            });
            const { data, loading, error } = result;

            navigate(`/setup/${opportunityId}`);
        },
        [addFunderMutation]
    );

    const updateOpportunity = useCallback(async (funderList: string[]) => {
        const result = addFunder(funderList);
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
