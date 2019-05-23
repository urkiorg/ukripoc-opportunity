import React, { FC, HTMLAttributes, useCallback } from "react";

import { Link } from "@reach/router";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import { SettingsListItem, FauxLink } from "../../theme";
import { CreateWebsiteListingInput, GetWebsiteListingQuery } from "../../API";

interface WebsiteListingItem {
    description: string;
    id: string;
    lastPublished: string;
    rank: number;
    __typename: string;
}
interface Props extends HTMLAttributes<HTMLElement> {
    //todo change from any
    websiteListings?: Array<WebsiteListingItem>;
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
        const websiteListing = props.websiteListings
            ? props.websiteListings[0]
            : null;
        if (websiteListing) {
            console.log(websiteListing);
            const listingLink = `/component/WebsiteListing/${
                websiteListing.id
            }`;
            return (
                <SettingsListItem>
                    <GridRow>
                        <GridCol setWidth="90%">
                            <Link to={listingLink}>
                                {websiteListing.__typename}
                            </Link>
                        </GridCol>
                        <GridCol>
                            <button
                                onClick={event =>
                                    deleteListing(websiteListing.id)
                                }
                            >
                                Delete
                            </button>
                        </GridCol>
                    </GridRow>
                </SettingsListItem>
            );
        }
    };

    return <div>{renderListItem()}</div>;
};

export default WorkflowComponentList;
