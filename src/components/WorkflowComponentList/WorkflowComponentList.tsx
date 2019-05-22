import React, { FC, HTMLAttributes, useCallback } from "react";
import cx from "classnames";
import styles from "./WorkflowComponentList.module.scss";

import Details from "@govuk-react/details";
import { GetWebsiteListingQuery, ListWebsiteListingsQuery } from "../../API";
import { Link } from "@reach/router";
import { Button } from "react-native";
import gql from "graphql-tag";
import { deleteWebsiteListing } from "../../graphql/mutations";
import { useMutation } from "react-apollo-hooks";

interface Props extends HTMLAttributes<HTMLElement> {
    websiteListings?: any;
}

const DELETE_LISTING = gql(deleteWebsiteListing);

export const WorkflowComponentList: FC<Props> = ({ ...props }) => {
    //todo change from any

    const deleteListingMutation = useMutation(DELETE_LISTING);

    const deleteListing = useCallback(
        async (id: string) => {
            const result = await deleteListingMutation({
                variables: {
                    input: { id }
                }
            });

            const { data, loading, error } = result;

            console.log({ ...result });
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
                <div>
                    <Link to={listingLink}>{websiteListing.__typename}</Link>

                    <button onClick={event => deleteListing(websiteListing.id)}>
                        Delete
                    </button>
                </div>
            );
        }
    };

    return <div>{renderListItem()}</div>;
};

export default WorkflowComponentList;
