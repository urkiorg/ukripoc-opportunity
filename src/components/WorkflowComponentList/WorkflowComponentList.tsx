import React, { FC, HTMLAttributes, useCallback } from "react";

import { Link } from "@reach/router";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import { SettingsListItem, LinkButton, Title } from "../../theme";
import { CreateWebsiteListingInput, GetWebsiteListingQuery } from "../../API";
import { WebsiteListing } from "../../types";

interface Props {
    websiteListings: (WebsiteListing | null)[] | null;
}

const DELETE_LISTING = gql(deleteWebsiteListing);

export const WorkflowComponentList: FC<Props> = ({ ...props }) => {
    console.log(props.websiteListings);

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

    if (!props.websiteListings) {
        return <Title> Not Found </Title>;
    }
    //could be websiteListing / Application
    const renderListItem = (): (JSX.Element | null)[] | undefined => {
        const websiteListings = props.websiteListings;

        if (!websiteListings || !websiteListings.length) {
            return;
        }

        return websiteListings.map(websiteListing => {
            if (!websiteListing) {
                return null;
            }
            const listingLink = `/component/WebsiteListing/${
                websiteListing.id
            }`;
            return (
                <SettingsListItem key={websiteListing.id}>
                    <GridRow>
                        <GridCol setWidth="90%">
                            <Link to={listingLink}>Website Listing</Link>
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
        });
    };

    return <div>{renderListItem()}</div>;
};

export default WorkflowComponentList;
