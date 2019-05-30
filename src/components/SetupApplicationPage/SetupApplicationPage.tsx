import React, { FC } from "react";

import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";

import { getApplication } from "../../graphql/queries";

import { RouterProps } from "@reach/router";

import { GetApplicationQuery } from "../../API";

import { SetupApplication } from "../SetupApplication";

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

    return <SetupApplication application={data} />;
};

export default SetupApplicationPage;
