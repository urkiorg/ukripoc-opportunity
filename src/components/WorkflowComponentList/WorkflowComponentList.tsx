import React, { FC, HTMLAttributes, useCallback } from "react";

import { Link } from "@reach/router";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import { SettingsListItem } from "../../theme";

interface Props extends HTMLAttributes<HTMLElement> {
    //todo change from any
    websiteListings?: any;
}

const DELETE_LISTING = gql(deleteWebsiteListing);

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
        const websiteListing = props.websiteListings.items[0] || null;
        if (websiteListing) {
            const listingLink = `/component/WebsiteListing/${
                websiteListing.id
            }`;
            return (
                <SettingsListItem>
                    <Link to={listingLink}>{websiteListing.__typename}</Link>

                    <button onClick={event => deleteListing(websiteListing.id)}>
                        Delete
                    </button>
                </SettingsListItem>
            );
        }
    };

    return <div>{renderListItem()}</div>;
};

export default WorkflowComponentList;
