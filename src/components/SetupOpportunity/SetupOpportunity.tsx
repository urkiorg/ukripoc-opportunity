import React, { FC, useState, useEffect, useCallback } from "react";
import Details from "@govuk-react/details";
import Link from "@govuk-react/link";

import { Link as RouterLink } from "@reach/router";
import { WorkflowComponentAdd } from "../WorkflowComponentAdd";
import { Title } from "../../theme";
import Caption from "@govuk-react/caption";
import { SettingsListItem } from "../../theme";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Button from "@govuk-react/button";
import LabelText from "@govuk-react/label-text";

import SectionBreak from "@govuk-react/section-break";
import {
    WebsiteListing,
    Opportunity,
    ApplicationListing,
    WorkflowItem
} from "../../types";
import styled from "styled-components";
import { WorkflowComponentList } from "../WorkflowComponentList";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import LoadingBox from "@govuk-react/loading-box";
import { GetOpportunityQueryWithQuestions } from "../SetupOpportunityPage/SetupOpportunityPage";
import {
    listingIsComplete,
    isApplicationListing,
    isWebsiteListing
} from "../../dataHelpers";

const checkListingsComplete = (listing: WorkflowItem[]): boolean =>
    !listing.length ||
    listing.reduce<boolean>(
        (acc, listing) => listingIsComplete(listing) || acc,
        false
    );

interface Props {
    loading: boolean;
    updateApplicationRanking: (id: string, rank: number) => void;
    updateWebsiteListingRanking: (id: string, rank: number) => void;
    opportunity: GetOpportunityQueryWithQuestions;
    finishOpportunity: () => Promise<any>;
}

const FinishSection = styled(GridRow)`
    padding: 3em 0;
`;

const Hr = styled(SectionBreak)`
    border-top: 1px solid #999;
`;

const getAllWorkflows = (getOpportunity: Opportunity) => {
    const websiteListings =
        getOpportunity &&
        getOpportunity.websiteListings &&
        getOpportunity.websiteListings.items
            ? getOpportunity.websiteListings.items
            : [];

    const applications =
        getOpportunity &&
        getOpportunity.application &&
        getOpportunity.application.items
            ? getOpportunity.application.items
            : [];

    const mergedOpportunities = () =>
        [...websiteListings, ...applications].filter(Boolean);

    return mergedOpportunities().sort((a, b) => {
        if (a && b) {
            return a.rank - b.rank;
        } else {
            return -1;
        }
    });
};

export const SetupOpportunity: FC<Props> = ({
    opportunity,
    updateWebsiteListingRanking,
    updateApplicationRanking,
    finishOpportunity,
    loading
}) => {
    const { getOpportunity } = opportunity;
    const [allWorkflows, setAllWorkflows] = useState<
        (ApplicationListing | WebsiteListing | null)[]
    >([]);
    const onButtonClick = useCallback(() => {
        finishOpportunity();
    }, [finishOpportunity]);

    const linkToFunders = getOpportunity
        ? `/setup/${getOpportunity.id}/funders`
        : "";

    useEffect(() => {
        if (!getOpportunity) {
            return;
        }

        setAllWorkflows(getAllWorkflows(getOpportunity));
    }, [getOpportunity]);

    const handleOnDragEnd = (draggableEvent: DropResult) => {
        const { destination, source } = draggableEvent;

        if (
            !destination ||
            (destination.index === source.index &&
                destination.droppableId === source.droppableId)
        ) {
            // No reordering required
            return;
        } else {
            if (!allWorkflows || !allWorkflows.length) {
                return;
            }

            const newOrdering = [...allWorkflows];
            newOrdering.splice(source.index, 1);
            newOrdering.splice(
                destination.index,
                0,
                allWorkflows[source.index]
            );
            setAllWorkflows(newOrdering);

            newOrdering.forEach((item, index) => {
                if (!item) {
                    return;
                }

                if (opportunity) {
                    if (isApplicationListing(item)) {
                        updateApplicationRanking(item.id, index);
                    }
                    if (isWebsiteListing(item)) {
                        updateWebsiteListingRanking(item.id, index);
                    }
                }
            });
        }
    };

    console.log("OK", allWorkflows);

    // Add other completion check functions here
    const allComplete =
        getOpportunity &&
        checkListingsComplete(allWorkflows) &&
        getOpportunity.fundersComplete;

    return (
        <LoadingBox loading={loading}>
            <Caption mb={1}>
                {getOpportunity ? getOpportunity.name : ""}
            </Caption>
            <Title>Opportunity setup</Title>
            <Caption mb={6} size="XL">
                Settings
            </Caption>
            <SettingsListItem>
                <GridRow>
                    <GridCol setWidth="90%">
                        <Link
                            to={linkToFunders}
                            as={RouterLink}
                            aria-label="Funders"
                        >
                            Funders
                        </Link>
                    </GridCol>
                    <GridCol>
                        {getOpportunity && getOpportunity.fundersComplete
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
            {allWorkflows ? (
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="droppable">
                        {provided => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <WorkflowComponentList
                                    orderedWorkflows={allWorkflows}
                                />
                                {provided.placeholder}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            ) : (
                <Title>Not Found</Title>
            )}
            <Hr />
            <WorkflowComponentAdd
                opportunityId={getOpportunity ? getOpportunity.id : ""}
            />
            <Hr />
            <FinishSection>
                <GridCol>
                    {!!getOpportunity && !getOpportunity.opportunityComplete ? (
                        <Button
                            isStart={false}
                            disabled={!allComplete}
                            onClick={onButtonClick}
                        >
                            Finish setup
                        </Button>
                    ) : (
                        <LabelText>Complete</LabelText>
                    )}
                </GridCol>
            </FinishSection>
        </LoadingBox>
    );
};

export default SetupOpportunity;
