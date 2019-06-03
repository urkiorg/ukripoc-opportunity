import React, { FC, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

import { getApplication } from "../../graphql/queries";

import { RouterProps } from "@reach/router";

import { GetApplicationQuery, UpdateApplicationMutation } from "../../API";

import { SetupApplication } from "../SetupApplication";

import { navigate } from "@reach/router";

import { useMutation } from "react-apollo-hooks";

import { updateApplication } from "../../graphql/mutations";
import { identifier } from "@babel/types";

const GET_APPLICATION = gql(getApplication);
interface Props extends RouterProps {
    id?: string;
}

export const SetupApplicationPage: FC<Props> = (props: Props) => {
    const { data } = useQuery<GetApplicationQuery>(GET_APPLICATION, {
        variables: {
            id: props.id
        },
        fetchPolicy: "cache-and-network"
    });

    const UPDATE_APPLICATION = gql(updateApplication);
    const updateApplicationMutation = useMutation<UpdateApplicationMutation>(
        UPDATE_APPLICATION
    );

    const updateApplicationCB = useCallback(
        async (openApplicationDate: string, closeApplicationDate: string) => {
            const result = await updateApplicationMutation({
                variables: {
                    input: {
                        id: props.id,
                        closeApplication: closeApplicationDate,
                        openApplication: openApplicationDate
                    }
                }
            });
            const { data } = result;

            const updateApplicationResult: UpdateApplicationMutation = data;

            navigate(
                `/setup/${
                    updateApplicationResult.updateApplication!.opportunity!.id
                }`
            );
        },
        [updateApplicationMutation]
    );

    return (
        <SetupApplication
            application={data}
            updateApplication={updateApplicationCB}
        />
    );
};

export default SetupApplicationPage;
