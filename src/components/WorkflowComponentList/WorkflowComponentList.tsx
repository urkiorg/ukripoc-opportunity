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
    placeholder: any;
    orderedOpportunity: (WebsiteListing | Application | null)[];
}

const DELETE_LISTING = gql(deleteWebsiteListing);

// @ts-ignore
export const WorkflowComponentList: FC<Props> = ({ ...props }) => {

    const deleteListingMutation = useMutation(DELETE_LISTING, {
        fetchPolicy: "no-cache"
    });

    const deleteListing = useCallback(
        async (id: string) => {
            const result = await deleteListingMutation({
                variables: {
                    input: { id }
                }
            });
            const { data, loading, error } = result;
        },
        [deleteListingMutation]
    );
    
    const renderListItem = () => 
            props.orderedOpportunity.map((component, index) =>
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
                );

    return renderListItem();
};

export default WorkflowComponentList;
