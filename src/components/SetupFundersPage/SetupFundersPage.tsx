import React, { FC, HTMLAttributes } from "react";
import cx from "classnames";
import styles from "./SetupFundersPage.module.scss";
import fundersList from "../../fixtures/funders.json";
import { SetupFunders } from "../SetupFunders";
import { getOpportunity } from "../../graphql/queries";
import { useQuery } from "react-apollo-hooks";
import gql from "graphql-tag";

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
