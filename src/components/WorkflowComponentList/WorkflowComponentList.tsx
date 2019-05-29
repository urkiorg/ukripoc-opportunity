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

    function renderWebsiteListings() {
        if (!props.websiteListings) {
            return <div />;
        }
    }

    if (!props.websiteListings) {
        return <Title> Not Found </Title>;
    }
    //could be websiteListing / Application
    const renderListItem = () => {
        const websiteListings = props.websiteListings!;
        const applications = props.applications!;

        const mergedComponents = [...websiteListings, ...applications];

        if (mergedComponents && mergedComponents.length) {
            console.log("got length");

            return mergedComponents.map(component => {
                if (!component) {
                    return <div />;
                }

                const niceName = typeNameToUrl(component.__typename);
                const listingLink = `/component/${niceName}/${component.id}`;
                return (
                    <SettingsListItem key={component.id}>
                        <GridRow>
                            <GridCol setWidth="90%">
                                <Link to={listingLink}>{niceName}</Link>
                            </GridCol>
                            <GridCol>
                                <button
                                    onClick={event =>
                                        deleteListing(component.id)
                                    }
                                >
                                    Delete
                                </button>
                            </GridCol>
                        </GridRow>
                    </SettingsListItem>
                );
            });
        }
    };

    return <div>{renderListItem()}</div>;
};

export default WorkflowComponentList;
