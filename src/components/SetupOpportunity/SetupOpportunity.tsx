import React, {
    FC,
    HTMLAttributes,
    useState,
    Children,
    useCallback
} from "react";

import Details from "@govuk-react/details";
import { getOpportunity } from "../../graphql/queries";
import { GetOpportunityQuery } from "../../API";
import { Link } from "@reach/router";

interface Props {
    opportunity: GetOpportunityQuery;
}

export const SetupOpportunity: FC<Props> = ({ opportunity }) => {
    if (!opportunity.getOpportunity) {
        return <div> Loading... </div>;
    }

    const linkToFunders = `/setup/${opportunity.getOpportunity.id}/funders`;

    return (
        <>
            <h3>
                {opportunity.getOpportunity.id} /
                {opportunity.getOpportunity.name}
            </h3>
            <h1>Opportunity setup</h1>

            <Link to={linkToFunders}>
                <span aria-label="Funders"> Funders </span>
            </Link>
            <h2>Settings</h2>

            <h3> Workflow </h3>
            <Details summary="How do I create my workflow ?">
                To add a workflow component, just select a component and
                sub-type to add using the dropdowns. You can re-order your
                components at any time by dragging and dropping them. Click on a
                component name to change the settings of a given component. Only
                information shown within a Website listing component will be
                published externally.
            </Details>
        </>
    );
};

export default SetupOpportunity;
