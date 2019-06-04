import React, { FC, useState, useEffect } from "react";
import Details from "@govuk-react/details";
import { GetOpportunityQuery } from "../../API";
import { Link } from "@reach/router";
import { WorkflowComponentAdd } from "../WorkflowComponentAdd";
import { Title } from "../../theme";
import Caption from "@govuk-react/caption";
import { SettingsListItem } from "../../theme";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import { WorkflowComponentList } from "../WorkflowComponentList";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";

interface Props {
    updateOpportunityRanking: ((id: any, rank: any) => void);
    opportunity: GetOpportunityQuery;
}

export const SetupOpportunity: FC<Props> = ({ opportunity, updateOpportunityRanking }) => {

    const [allOpportunities, setAllOpportunities] = useState();

    const linkToFunders = opportunity.getOpportunity ? 
        `/setup/${opportunity.getOpportunity.id}/funders` : "";
    
    const { getOpportunity } = opportunity;
    
    const websiteListings = (
        getOpportunity &&
        getOpportunity.websiteListings &&
        getOpportunity.websiteListings.items
        ) ? getOpportunity.websiteListings.items : [];
    
    const applications = (
        getOpportunity &&
        getOpportunity.application &&
        getOpportunity.application.items
        ) ? getOpportunity.application.items : [];
    
    const mergedOpportunity = () => 
        [...websiteListings, ...applications];
        
    const orderedOpportunity = () =>
        mergedOpportunity().sort((a, b) => {
            if (a && b) {
                return (a.rank - b.rank)
            } else {
                return -1
            }
    });

    useEffect(() => {
        console.log("orderedOpportunity: ",orderedOpportunity());
        setAllOpportunities(orderedOpportunity());
    },[]);

    const handleOnDragEnd = (draggableEvent: DropResult) => {
        const { destination, source, draggableId } = draggableEvent

        if (!destination ||
            (destination.index === source.index && 
            destination.droppableId === source.droppableId)) {
            // No reordering required
            return;
        } else  {
            const newOrdering = [...allOpportunities];
            // remove from old position
            newOrdering.splice(source.index, 1);
            // Add object to new position
            newOrdering.splice(destination.index, 0, allOpportunities[source.index]);
            
            // Set state
            setAllOpportunities(newOrdering);
            
            // Save to database
            newOrdering.forEach((opportunity, index) => {
                // Update remote with new index
                if (opportunity) {
                    console.log("request: ",opportunity.id, index);
                    updateOpportunityRanking(opportunity.id, index);
                }
            })   
        }     
    }

    return (
            !opportunity.getOpportunity ? 
            <div> Loading... </div>
            :
            <div>
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
            {allOpportunities ?
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            <div
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                <WorkflowComponentList
                                    placeholder={provided.placeholder}
                                    orderedOpportunity={allOpportunities}
                                />
                                { provided.placeholder }
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
                :
                <Title>Not Found</Title>
            }
            <WorkflowComponentAdd
                opportunityId={opportunity.getOpportunity.id}
            />
            </div>
    );
};

export default SetupOpportunity;
