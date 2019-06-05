import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";
import { WebsiteListing } from "../../types";
import { WorkflowComponentItem } from "../WorkflowComponentItem";
import { Draggable } from "react-beautiful-dnd";

interface Application {
    __typename: string;
    id: string;
    rank: number;
    openApplication: string | null;
    closeApplication: string | null;
}

interface Props {
    orderedOpportunity: (WebsiteListing | Application | null)[];
}

const DELETE_LISTING = gql(deleteWebsiteListing);

// @ts-ignore
export const WorkflowComponentList: FC<Props> = ({ orderedOpportunity }) => {

    const deleteListingMutation = useMutation(DELETE_LISTING, {
        fetchPolicy: "no-cache"
    });

    const deleteListing = useCallback(
        async (id: string) => {
            await deleteListingMutation({
                variables: {
                    input: { id }
                }
            });
        },
        [deleteListingMutation]
    );

    return (
        orderedOpportunity.map((component, index) =>
            component ?
            <Draggable
                key={component.id}
                draggableId={component.id} 
                index={index} >
                {(provided: any) =>
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
                }
            </Draggable>
            :
            <div key={index} />
        )
    )
};

export default WorkflowComponentList;
