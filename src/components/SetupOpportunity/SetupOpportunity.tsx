import React, { FC, HTMLAttributes, useState, Children } from "react";

import Details from "@govuk-react/details";

import { Query } from "react-apollo";

import { gql } from "apollo-boost";
import { getOpportunity } from "../../graphql/queries";

interface Props extends HTMLAttributes<HTMLElement> {
    opportunityId: String;
}

const GET_OPP = gql(getOpportunity);

export const SetupOpportunity: FC<Props> = ({ ...props }) => (
    <div>
        <Query query={GET_OPP} variables={{ id: props.opportunityId }}>
            {({ loading, error, data, refetch }: any) => {
                if (loading) return "Loading...";
                if (error) return `Error! ${error.message}`;
                if (data && !data.getOpportunity) {
                    console.log(props);
                    console.log(data);
                    return <div>No Opportunity found.</div>;
                }

                if (data && data.getOpportunity) {
                    return (
                        <>
                            <h3> {data.getOpportunity.name} </h3>
                            <h1>Opportunity setup</h1>

                            <h2>Settings</h2>

                            <h3> Workflow </h3>
                            <Details summary="How do I create my workflow ?">
                                To add a workflow component, just select a
                                component and sub-type to add using the
                                dropdowns. You can re-order your components at
                                any time by dragging and dropping them. Click on
                                a component name to change the settings of a
                                given component. Only information shown within a
                                Website listing component will be published
                                externally.
                            </Details>
                        </>
                    );
                }
            }}
        </Query>
    </div>
);
