import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";
import { updateWebsiteListing } from "../../graphql/mutations";
import { WebsiteListing } from "../WebsiteListing/index";
import { navigate, RouterProps } from "@reach/router";
import { getWebsiteListing, getOpportunity } from "../../graphql/queries";
import {
    GetWebsiteListingQuery,
    UpdateWebsiteListingMutation
} from "../../API";

const UPDATE_WEBSITE_LISTING = gql(updateWebsiteListing);

const GET_LISTING = gql(getWebsiteListing);

const GET_OPPORTUNITY = gql(getOpportunity);

interface Props extends RouterProps {
    id?: string;
}

export const WebsiteListingPage: FC<Props> = (props: Props) => {
    const updateWebsiteListingMutation = useMutation<
        UpdateWebsiteListingMutation
    >(UPDATE_WEBSITE_LISTING);

    const { data, loading, error } = useQuery<GetWebsiteListingQuery>(
        GET_LISTING,
        {
            variables: {
                id: props.id
            },
            fetchPolicy: "cache-and-network"
        }
    );

    const updateWebsiteListing = useCallback(
        async (description: string) => {
            const result = await updateWebsiteListingMutation({
                variables: {
                    input: { id: props.id, description: description }
                }
            });

            const { data, loading, error } = result;

            const payLoad = {
                listingId: props.id,
                opportunityId: data.updateWebsiteListing.opportunity.id,
                description: description
            };

            console.log(payLoad);

            if (data) {
                navigate(`/setup/${data.updateWebsiteListing.opportunity.id}`);
            }
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
