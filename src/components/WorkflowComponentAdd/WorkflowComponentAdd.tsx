import React, { FC, HTMLAttributes, useCallback } from "react";
import cx from "classnames";
import styles from "./WorkflowComponentAdd.module.scss";

import Select from "@govuk-react/select";
import Button from "@govuk-react/button";
import { navigate } from "@reach/router";

import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import { createWebsiteListing } from "../../graphql/mutations";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

// interface Props {
//     addOpportunityWorkFlowComponent: (id: string) => void;
// }

interface Props {
    opportunityId: string;
}

const CREATE_WEBSITE_LISTING = gql(createWebsiteListing);

export const WorkflowComponentAdd: FC<Props> = ({ opportunityId }) => {
    //if its a website component....
    const createWebsiteListingMutation = useMutation(CREATE_WEBSITE_LISTING);

    const onButtonClick = useCallback(
        async (name: string) => {
            //if website component
            const result = await createWebsiteListingMutation({
                variables: {
                    input: {
                        websiteListingOpportunityId: opportunityId,
                        rank: 1
                    }
                }
            });
            //end if

            const { data, loading, error } = result;

            if (data) {
                navigate(
                    `/component/${data.createWebsiteListing.__typename}/${
                        data.createWebsiteListing.id
                    }`
                );
            }
        },
        [createWebsiteListingMutation]
    );

    return (
        <div>
            <p> Add workflow component</p>

            <GridRow>
                <GridCol setWidth="70%">
                    <Select name="group1">
                        <option value="0">Website Listing</option>
                    </Select>
                </GridCol>
                <GridCol>
                    <Button onClick={onButtonClick}> Add </Button>
                </GridCol>
            </GridRow>
        </div>
    );
};

// export const WorkflowComponentAdd: FC<Props> = ({ ...props }) => (

// );

export default WorkflowComponentAdd;
