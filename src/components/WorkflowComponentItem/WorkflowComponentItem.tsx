import React, { FC } from "react";
import { Link } from "@reach/router";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import { SettingsListItem } from "../../theme";
import {
    WebsiteListing,
    ApplicationListing,
    WorkflowTypes,
    WorkflowUrls
} from "../../types";
import { listingIsComplete } from "../../dataHelpers";

interface Props {
    component: WebsiteListing | ApplicationListing;
    deleteListing: (id: string, component: string) => void;
}

const niceName: WorkflowTypes = {
    application: "Application",
    websiteListing: "Website Listing"
};

const urlFriendlyNames: WorkflowUrls = {
    application: "application",
    websiteListing: "website-listing"
};

const formatCasing = (word: string) =>
    word.charAt(0).toLowerCase() + word.slice(1);

export const WorkflowComponentItem: FC<Props> = ({
    deleteListing,
    component
}) => {
    const formattedName =
        niceName[formatCasing(component.__typename) as keyof WorkflowTypes];
    const urlName =
        urlFriendlyNames[
            formatCasing(component.__typename) as keyof WorkflowUrls
        ];
    const listingLink = `/component/${urlName}/${component.id}`;
    return (
        <SettingsListItem>
            <GridRow>
                <GridCol>
                    <Link to={listingLink}>{formattedName}</Link>
                </GridCol>
                <GridCol setWidth="100">
                    {listingIsComplete(component) ? "Complete" : "Incomplete"}
                </GridCol>

                <GridCol setWidth="100">
                    <button
                        onClick={() =>
                            deleteListing(component.id, component.__typename)
                        }
                    >
                        Remove
                    </button>
                </GridCol>
            </GridRow>
        </SettingsListItem>
    );
};

export default WorkflowComponentItem;
