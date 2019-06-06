import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";
import { updateWebsiteListing } from "../../graphql/mutations";
import { WebsiteListing } from "../WebsiteListing/index";
import { navigate, RouterProps } from "@reach/router";
import { getWebsiteListing } from "../../graphql/queries";
import {
    GetWebsiteListingQuery,
    UpdateWebsiteListingMutation
} from "../../API";
import { API } from "aws-amplify";

const UPDATE_WEBSITE_LISTING = gql(updateWebsiteListing);

const GET_LISTING = gql(getWebsiteListing);

interface Props extends RouterProps {
    id?: string;
}

export const WebsiteListingPage: FC<Props> = ({ id }) => {
    const updateWebsiteListingMutation = useMutation<
        UpdateWebsiteListingMutation
    >(UPDATE_WEBSITE_LISTING);

    const { data } = useQuery<GetWebsiteListingQuery>(GET_LISTING, {
        variables: {
            id
        },
        fetchPolicy: "cache-and-network"
    });

    const updateWebsiteListing = useCallback(
        async (description: string) => {
            const result = await updateWebsiteListingMutation({
                variables: {
                    input: { id, description }
                }
            });

            const { data } = result;

            const payload = {
                listingId: id,
                opportunityId: data.updateWebsiteListing.opportunity.id,
                description: description
            };

            console.log(payload);

            if (data) {
                navigate(`/setup/${data.updateWebsiteListing.opportunity.id}`);
            }

            const apiName = "publishopportunitylisting";
            const path = "/opportunity-listing/publish";
            const init = {
                body: payload
            };

            await API.post(apiName, path, init);
        },
        [updateWebsiteListingMutation, id]
    );

    return (
        <WebsiteListing
            websiteListing={data}
            updateWebsiteListing={updateWebsiteListing}
        />
    );
};

export default WebsiteListingPage;
