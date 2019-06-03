import React, { FC, useCallback, useState } from "react";

import Select from "@govuk-react/select";
import Button from "@govuk-react/button";
import { navigate } from "@reach/router";

import { useMutation } from "react-apollo-hooks";
import { gql } from "apollo-boost";
import {
    createWebsiteListing,
    createApplication
} from "../../graphql/mutations";

import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";

interface Props {
    opportunityId: string;
}

const CREATE_WEBSITE_LISTING = gql(createWebsiteListing);

const CREATE_APPLICATION = gql(createApplication);

export const WorkflowComponentAdd: FC<Props> = ({ opportunityId }) => {
    const [selectedComponent, setSelectedComponent] = useState(
        "website-listing"
    );

    const onInputChange = useCallback(
        event => setSelectedComponent(event.target.value),
        []
    );

    const createWebsiteListingMutation = useMutation(CREATE_WEBSITE_LISTING);

    const createApplicationMutation = useMutation(CREATE_APPLICATION);

    function onButtonClick() {
        console.log(selectedComponent);

        if (selectedComponent === "website-listing") {
            return websiteListing();
        } else if (selectedComponent === "application") {
            return application();
        }
    }

    const application = useCallback(async () => {
        const result = await createApplicationMutation({
            variables: {
                input: {
                    applicationOpportunityId: opportunityId,
                    rank: 1
                }
            }
        });

        const { data } = result;
        if (data) {
            navigate(`/component/application/${data.createApplication.id}`);
        }
    }, [createApplicationMutation]);

    const websiteListing = useCallback(async () => {
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

        const { data } = result;
        if (data) {
            navigate(
                `/component/website-listing/${data.createWebsiteListing.id}`
            );
        }
    }, [createWebsiteListingMutation, opportunityId]);

    return (
        <div>
            <p> Add workflow component</p>
            <GridRow>
                <GridCol setWidth="90%">
                    <Select
                        name="workflow-components"
                        onChange={onInputChange}
                        value={selectedComponent}
                    >
                        <option value="website-listing">Website Listing</option>
                        <option value="application">Application</option>
                    </Select>
                </GridCol>
                <GridCol>
                    <Button type="submit" onClick={onButtonClick}>
                        Add
                    </Button>
                </GridCol>
            </GridRow>
        </div>
    );
};

export default WorkflowComponentAdd;
