import React, { FC, HTMLAttributes, useCallback } from "react";

import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";

import { getApplication } from "../../graphql/queries";
import { updateApplication } from "../../graphql/mutations";

import { navigate, RouteComponentProps, RouterProps } from "@reach/router";

import { GetApplicationQuery, UpdateApplicationMutation } from "../../API";

import { SetupApplication } from "../SetupApplication";

const GET_APPLICATION = gql(getApplication);
interface Props extends RouterProps {
    id?: string;
}

export const SetupApplicationPage: FC<Props> = (props: Props) => {
    //get application
    const { data, loading, error } = useQuery<GetApplicationQuery>(
        GET_APPLICATION,
        {
            variables: {
                id: props.id
            },
            fetchPolicy: "cache-and-network"
        }
    );

    return <SetupApplication application={data} />;
};

export default SetupApplicationPage;
