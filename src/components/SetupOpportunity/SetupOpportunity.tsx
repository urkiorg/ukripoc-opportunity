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
import { Title, LinkButton } from "../../theme";
import Caption from "@govuk-react/caption";
import { SettingsListItem } from "../../theme";
import P from "@govuk-react/paragraph";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Button from "@govuk-react/button";

import SectionBreak from "@govuk-react/section-break";
import { WorkflowComponentList } from "../WorkflowComponentList";
import { WebsiteListing } from "../../types";
import styled from "styled-components";

const checkWebsiteListingComplete = (
    websiteListings: (WebsiteListing | null)[]
): boolean =>
    websiteListings.reduce<boolean>((acc, listing: WebsiteListing | null) => {
        return !listing || listing.lastPublished ? true : acc;
    }, false);

interface Props {
    opportunity: GetOpportunityQuery;
    finishOpportunity: () => Promise<any>;
}

const DeleteLink = styled(LinkButton)`
    vertical-align: middle;
    padding: 0px 10px;
    margin-left: 10px;
    align-self: flex-start;
`;

const FinishSection = styled(GridRow)`
    padding-top: 3em;
`;

const Hr = styled(SectionBreak)`
    border-top: 1px solid #999;
`;

export const SetupOpportunity: FC<Props> = ({
    opportunity,
    finishOpportunity
}) => {
    const onButtonClick = useCallback(() => {
        finishOpportunity();
    }, [finishOpportunity]);

    if (!opportunity.getOpportunity) {
        return <div> Loading... </div>;
    }

    const linkToFunders = `/setup/${opportunity.getOpportunity.id}/funders`;

    const websiteListings =
        opportunity.getOpportunity &&
        opportunity.getOpportunity.websiteListings &&
        opportunity.getOpportunity.websiteListings.items;

    // Add other checks here
    const allComplete =
        (!websiteListings ||
            !websiteListings.length ||
            checkWebsiteListingComplete(websiteListings)) &&
        opportunity.getOpportunity.fundersComplete;

    console.log(websiteListings);
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
            <WorkflowComponentList
                websiteListings={websiteListings ? websiteListings : null}
            />
            <Hr />
            <WorkflowComponentAdd
                opportunityId={opportunity.getOpportunity.id}
            />
            <Hr />
            <FinishSection>
                <GridCol>
                    <Button
                        isStart={false}
                        disabled={!allComplete}
                        onClick={onButtonClick}
                    >
                        Finish setup
                    </Button>
                    <DeleteLink>Delete opportunity</DeleteLink>
                </GridCol>
            </FinishSection>
        </>
    );
};

export default SetupOpportunity;
