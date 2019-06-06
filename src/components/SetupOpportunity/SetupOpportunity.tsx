import React, { FC, useState, useEffect, useCallback } from "react";
import Details from "@govuk-react/details";
import { GetOpportunityQuery } from "../../API";
import { Link } from "@reach/router";
import { WorkflowComponentAdd } from "../WorkflowComponentAdd";
import { Title, LinkButton } from "../../theme";
import Caption from "@govuk-react/caption";
import { SettingsListItem } from "../../theme";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import Button from "@govuk-react/button";

import SectionBreak from "@govuk-react/section-break";
import { WebsiteListing, Opportunity, ApplicationListing } from "../../types";
import styled from "styled-components";
import { WorkflowComponentList } from "../WorkflowComponentList";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import LoadingBox from "@govuk-react/loading-box";

const checkWebsiteListingComplete = (listing: WebsiteListing): boolean => {
    return !!(listing.description && listing.lastPublished);
};
const checkApplicationListingComplete = (
    listing: ApplicationListing
): boolean => {
    return !!(listing.openApplication && listing.closeApplication);
};

const checkListingsComplete = (
    listing: (WebsiteListing | ApplicationListing | null)[]
): boolean =>
    listing.reduce<boolean>(
        (acc, listing: WebsiteListing | ApplicationListing | null) => {
            if (!listing) {
                return true;
            }
            const typename = listing.__typename;

            if (typename === "WebsiteListing") {
                return checkWebsiteListingComplete ? true : acc;
            }

            if (typename === "Application") {
                return checkApplicationListingComplete ? true : acc;
            }
            return acc;
        },
        false
    );

interface Props {
    updateApplicationRanking: (id: string, rank: number) => void;
    updateWebsiteListingRanking: (id: string, rank: number) => void;
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

    const mergedWorkflows = () => [...websiteListings, ...applications];

    return mergedWorkflows().sort((a, b) => {
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
    finishOpportunity
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
    }, []);

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

                const { __typename, id } = item;

                if (opportunity) {
                    if (__typename === "Application") {
                        updateApplicationRanking(id, index);
                    }
                    if (__typename === "WebsiteListing") {
                        updateWebsiteListingRanking(id, index);
                    }
                }
            });
        }
    };

    // Add other completion check functions here
    const allComplete =
        getOpportunity &&
        checkListingsComplete(allWorkflows) &&
        getOpportunity.fundersComplete;

    return (
        <LoadingBox loading={!getOpportunity}>
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
                        <Link to={linkToFunders}>
                            <span aria-label="Funders"> Funders </span>
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
        </LoadingBox>
    );
};

export default SetupOpportunity;
