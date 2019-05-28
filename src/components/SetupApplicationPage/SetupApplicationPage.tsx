import React, { FC, HTMLAttributes, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import { getApplication } from "../../graphql/queries";
import { updateApplication } from "../../graphql/mutations";

import { navigate, RouteComponentProps, RouterProps } from "@reach/router";
import {
    UpdateOpportunityMutationVariables,
    GetApplicationQuery
} from "../../API";
import { SetupApplication } from "../SetupApplication";

interface Props extends RouterProps {
    id?: string;
}

const GET_APPLICATION = gql(getApplication);

const UPDATE_APPLICATION = gql(updateApplication);

export const SetupApplicationPage: FC<Props> = (props: Props) => {
    const { data, loading, error } = useQuery<GetApplicationQuery>(
        GET_APPLICATION,
        {
            variables: {
                id: props.id
            },
            fetchPolicy: "cache-and-network"
        }
    );

    const application = data;

    return <SetupApplication application={application} />;
};

export default SetupApplicationPage;
