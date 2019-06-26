import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import {
    deleteWebsiteListing,
    deleteApplication
} from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";
import { WebsiteListing, ApplicationListing } from "../../types";
import { WorkflowComponentItem } from "../WorkflowComponentItem";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { getOpportunity } from "../../graphql/queries";

interface Props {
    orderedWorkflows: (WebsiteListing | ApplicationListing | null)[];
    opportunityId: string;
}

const DELETE_WEBSITE_LISTING = gql(deleteWebsiteListing);
const DELETE_APPLICATION_LISTING = gql(deleteApplication);

export const WorkflowComponentList: FC<Props> = ({
    orderedWorkflows,
    opportunityId
}) => {
    const GET_OPPORTUNITY = gql(getOpportunity);

    console.log(opportunityId);

    const deleteWebsiteListingMutation = useMutation(DELETE_WEBSITE_LISTING, {
        fetchPolicy: "no-cache",
        refetchQueries: [
            {
                query: GET_OPPORTUNITY,
                variables: { id: opportunityId }
            }
        ]
    });

    const deleteApplicationMutation = useMutation(DELETE_APPLICATION_LISTING, {
        fetchPolicy: "no-cache",
        refetchQueries: [
            {
                query: GET_OPPORTUNITY,
                variables: { id: opportunityId }
            }
        ]
    });

    const deleteListing = useCallback(
        async (id: string, type: string) => {
            if (type === "WebsiteListing") {
                await deleteWebsiteListingMutation({
                    variables: {
                        input: { id }
                    }
                });
            }

            if (type === "Application") {
                await deleteApplicationMutation({
                    variables: {
                        input: { id }
                    }
                });
            }
        },
        [deleteWebsiteListingMutation, deleteApplicationMutation]
    );

    return (
        <>
            {orderedWorkflows.map((component, index) =>
                component ? (
                    <Draggable
                        key={component.id}
                        draggableId={component.id}
                        index={index}
                    >
                        {(provided: DraggableProvided) => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                            >
                                <WorkflowComponentItem
                                    component={component}
                                    deleteListing={deleteListing}
                                />
                            </div>
                        )}
                    </Draggable>
                ) : (
                    <div key={index} />
                )
            )}
        </>
    );
};

export default WorkflowComponentList;
