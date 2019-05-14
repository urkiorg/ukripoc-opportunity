import React, { FC, HTMLAttributes } from "react";

import gql from "graphql-tag";
import { useQuery } from "react-apollo-hooks";
import { getOpportunity } from "../../graphql/queries";

import fundersList from "../../fixtures/funders.json";
import { SetupFunders } from "../SetupFunders";

interface Props extends HTMLAttributes<HTMLElement> {}

const GET_OPP = gql(getOpportunity);

export const SetupFundersPage: FC = (props: any) => {
    const opportunityId = props.opportunityId;
    const { data, loading, error } = useQuery(GET_OPP, {
        variables: {
            id: opportunityId
        }
    });
    console.log(data);
    const opportunity = data;
    return <SetupFunders funders={fundersList} opportunity={opportunity} />;
};

export default SetupFundersPage;
