import React, { FC, HTMLAttributes, useCallback } from "react";

import { Link } from "@reach/router";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import { SettingsListItem, FauxLink } from "../../theme";
import { CreateWebsiteListingInput } from "../../API";

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

    if (props.websiteListings && !props.websiteListings.items) {
        return <div> Not here </div>;
    }

    //could be websiteListing / Application
    const renderListItem = () => {
        console.log(props.websiteListings.item);

        const websiteListing = props.websiteListings.items[0] || null;
        if (websiteListing) {
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
                            <FauxLink
                                onClick={event =>
                                    deleteListing(websiteListing.id)
                                }
                            >
                                Delete
                            </FauxLink>
                        </GridCol>
                    </GridRow>
                </SettingsListItem>
            );
        }
    };

    return <div>{renderListItem()}</div>;
};

export default WorkflowComponentList;
