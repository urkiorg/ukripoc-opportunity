import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";
import { updateWebsiteListing } from "../../graphql/mutations";
import { WebsiteListing } from "../WebsiteListing/index";
import { navigate, RouterProps } from "@reach/router";
import { getWebsiteListing, getOpportunity } from "../../graphql/queries";

const UPDATE_WEBSITE_LISTING = gql(updateWebsiteListing);

const GET_LISTING = gql(getWebsiteListing);

const GET_OPPORTUNITY = gql(getOpportunity);

interface Props extends RouterProps {
    id?: String;
}

export const WebsiteListingPage: FC<Props> = (props: Props) => {
    const updateWebsiteListingMutation = useMutation(UPDATE_WEBSITE_LISTING);

    const { data, loading, error } = useQuery(GET_LISTING, {
        variables: {
            id: props.id
        }
    });

    const updateWebsiteListing = useCallback(
        async (name: string) => {
            console.log(name);
            const result = await updateWebsiteListingMutation({
                variables: {
                    input: { id: props.id, description: name }
                }
            });

            const { data, loading, error } = result;

            console.log(data);

            // if (data) {
            //     navigate(`/setup/${data.createOpportunity.id}`);
            // }
        },
        [updateWebsiteListingMutation]
    );

    return (
        <WebsiteListing
            websiteListing={data}
            updateWebsiteListing={updateWebsiteListing}
        />
    );
};

export default WebsiteListingPage;
