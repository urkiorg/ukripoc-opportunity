import React, { FC, useCallback } from "react";
import gql from "graphql-tag";
import { useMutation, useQuery } from "react-apollo-hooks";
import { createOpportunity } from "../../graphql/mutations";
import { WebsiteListing } from "../WebsiteListing/index";
import { navigate, RouterProps } from "@reach/router";
import { getOpportunity } from "../../graphql/queries";

const CREATE_OPPORTUNITY = gql(createOpportunity);

//change to listing
const GET_LISTING = gql(getOpportunity);

interface Props extends RouterProps {
    id?: String;
}

export const WebsiteListingPage: FC<Props> = (props: Props) => {
    const addOpportunityMutation = useMutation(CREATE_OPPORTUNITY);

    const { data, loading, error } = useQuery(GET_LISTING, {
        variables: {
            id: props.id
        }
    });

    const addWebsiteListing = useCallback(
        async (name: string) => {
            const result = await addOpportunityMutation({
                variables: {
                    input: { name, description: "Today" }
                }
            });

            const { data, loading, error } = result;

            if (data) {
                navigate(`/setup/${data.createOpportunity.id}`);
            }
        },
        [addOpportunityMutation]
    );

    return (
        <WebsiteListing
            opportunity={data}
            addWebsiteListing={addWebsiteListing}
        />
    );
};

export default WebsiteListingPage;
