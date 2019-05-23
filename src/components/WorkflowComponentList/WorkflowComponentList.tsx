import React, { FC, HTMLAttributes, useCallback } from "react";

import { Link } from "@reach/router";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import { SettingsListItem, FauxLink, Title } from "../../theme";
import { CreateWebsiteListingInput, GetWebsiteListingQuery } from "../../API";

interface WebsiteListing {
    id: string;
    rank: number;
    lastPublished?: string;
    description?: string;
    __typename: string;
}
interface Props extends HTMLAttributes<HTMLElement> {
    //todo change from any
    websiteListings: any;
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
    const renderListItem = () => {
        const websiteListing = props.websiteListings;

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
