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
import { WorkflowComponentAdd } from "../WorkflowComponentAdd";
import { Title } from "../../theme";
import Caption from "@govuk-react/caption";
import { SettingsListItem } from "../../theme";
import P from "@govuk-react/paragraph";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import SectionBreak from "@govuk-react/section-break";
import { WorkflowComponentList } from "../WorkflowComponentList";

interface Props {
    opportunity: GetOpportunityQuery;
}

export const SetupOpportunity: FC<Props> = ({ opportunity }) => {
    if (!opportunity.getOpportunity) {
        return <div> Loading... </div>;
    }

    const linkToFunders = `/setup/${opportunity.getOpportunity.id}/funders`;

    if (
        !opportunity.getOpportunity ||
        !opportunity.getOpportunity.websiteListings ||
        !opportunity.getOpportunity.websiteListings.items
    ) {
        return <Title>Not found</Title>;
    }

    const websiteListings = opportunity.getOpportunity.websiteListings.items;

    return (
        <>
            <Caption mb={1}>{opportunity.getOpportunity.name}</Caption>
            <Title>Opportunity setup</Title>

            <Caption mb={6} size="XL">
                Settings
            </Caption>

            <SettingsListItem>
                <GridRow>
                    <GridCol setWidth="90%">
                        <Link to={linkToFunders}>
                            <span aria-label="Funders"> Funders </span>
                        </Link>
                    </GridCol>
                    <GridCol>
                        {opportunity.getOpportunity.fundersComplete
                            ? "Done"
                            : "Not Done"}
                    </GridCol>
                </GridRow>
            </SettingsListItem>

            <Caption mb={3}>Workflow</Caption>

            <Details summary="How do I create my workflow ?" mb={2}>
                To add a workflow component, just select a component and
                sub-type to add using the dropdowns. You can re-order your
                components at any time by dragging and dropping them. Click on a
                component name to change the settings of a given component. Only
                information shown within a Website listing component will be
                published externally.
            </Details>
            <WorkflowComponentList websiteListings={websiteListings} />

            <WorkflowComponentAdd
                opportunityId={opportunity.getOpportunity.id}
            />
        </>
    );
};

export default SetupOpportunity;
