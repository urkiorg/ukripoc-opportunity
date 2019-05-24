import React, { FC, HTMLAttributes, useCallback, Props } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import { getOpportunity } from "../../graphql/queries";
import { updateOpportunity } from "../../graphql/mutations";

import { navigate, RouteComponentProps } from "@reach/router";
import { UpdateOpportunityMutationVariables } from "../../API";
import { SetupApplication } from "../SetupApplication";

const GET_OPPORTUNITY = gql(getOpportunity);

const UPDATE_OPPORTUNITY = gql(updateOpportunity);

export const SetupApplicationPage: FC = (props: any) => {
    //fetch

    const application = "";
    console.log(props);
    const opportunityId = props.opportunityId;
    console.log(opportunityId);
    const { data, loading, error } = useQuery(GET_OPPORTUNITY, {
        variables: {
            id: opportunityId
        }
    });

    const opportunity = data;

    const addApplicationMutation = useMutation<
        {},
        UpdateOpportunityMutationVariables
    >(UPDATE_OPPORTUNITY);

    const addApplication = useCallback(
        async (name: string[]) => {
            const result = await addApplicationMutation({
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
        [addApplicationMutation]
    );

    const updateOpportunity = useCallback(async (funderList: string[]) => {
        const result = addApplication(funderList);
    }, []);

    return (
        <SetupApplication
            application={application}
            currentOpportunity={opportunity}
            applicationChanged={updateOpportunity}
        />
    );
};

export default SetupApplicationPage;
