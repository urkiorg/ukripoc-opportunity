import React, { FC, useCallback } from "react";

import { Link } from "@reach/router";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

import { SettingsListItem, Title } from "../../theme";
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

    if (!props.websiteListings) {
        return <Title> Not Found </Title>;
    }
    //could be websiteListing / Application
    const renderListItem = (): (JSX.Element | null)[] | undefined => {
        const websiteListings = props.websiteListings!;
        const applications = props.applications!;

        const mergedComponents = [...websiteListings, ...applications];

        if (mergedComponents && mergedComponents.length) {
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
                                    onClick={() => deleteListing(component.id)}
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
