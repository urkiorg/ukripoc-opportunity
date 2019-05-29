import React, { FC, useCallback } from "react";

import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import { Title } from "../../theme";
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
    websiteListings: (WebsiteListing | null)[] | null;
    applications: (Application | null)[] | null;
    droppableProps: any;
    placeholder: any;
    innerRef: any;
}

const DELETE_LISTING = gql(deleteWebsiteListing);

function typeNameToUrl(name: string) {
    switch (name) {
        case "Application":
            return "application";
        case "WebsiteListing":
            return "website-listing";
        default:
            console.warn("NO TYPENAMETOURL");
    }
}

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
    
    //could be websiteListing / Application
    const renderListItem = () => {
        const websiteListings = props.websiteListings || [];
        const applications = props.applications || [];
        const mergedComponents = [...websiteListings, ...applications];

        if (mergedComponents && mergedComponents.length) {
            console.log("got length");

            return mergedComponents.map((component, index) =>
                    component ?
                    <Draggable
                        key={component.id}
                        draggableId={component.id} 
                        index={index} >
                        {(provided: any) => 
                            <WorkflowComponentItem
                                innerRef={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                component={component} 
                                deleteListing={deleteListing}
                            />
                        }
                    </Draggable>
                    :
                    <div key={index} />
                );
            };
        }

    return (
        <div ref={props.innerRef}>
            {
                !props.websiteListings ?
                    <Title> Not Found </Title>
                    :
                    <div>
                        { renderListItem() }
                        { props.placeholder }
                    </div>
            }
        </div>);
};

export default WorkflowComponentList;
