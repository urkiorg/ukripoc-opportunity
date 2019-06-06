import React, { FC } from "react";
import { Link } from "@reach/router";
import GridRow from "@govuk-react/grid-row";
import GridCol from "@govuk-react/grid-col";
import { SettingsListItem } from "../../theme";
import { WebsiteListing, ApplicationListing, ApplicationTypes } from "../../types";

interface Props {
    component: WebsiteListing | ApplicationListing;
    deleteListing: (id: string) => (void);
}

const niceName: ApplicationTypes = {
    application: "Application",
    websiteListing: "Website Listing",
}

const formatCasing = (word: string) => word.charAt(0).toLowerCase() + word.slice(1);

const renderApplicationDetails = (component:  ApplicationListing) => {
    const {openApplication, closeApplication} = component;
    
    return (
        <div>
            <p>Application open</p>
            <p>{openApplication}</p>
            <p>Application close</p>
            <p>{closeApplication}</p>
        </div>
    )
}

const renderWebsiteListing = (component: WebsiteListing) => {
    const {lastPublished} = component;

    return (
        <div>
            <p>Publish data</p>
            <p>{lastPublished}</p>
        </div>
    )
}

export const WorkflowComponentItem: FC<Props> = ({deleteListing, component}) => {
    const formattedName = niceName[formatCasing(component.__typename) as keyof ApplicationTypes];
    const listingLink = `/component/${formattedName}/${component.id}`;
    
    return (
        <SettingsListItem>
            <GridRow>
                <GridCol setWidth="70%">
                    <Link to={listingLink}>{formattedName}</Link>
                </GridCol>
                <GridCol>
                    <a onClick={() => deleteListing(component.id)}>
                        Remove
                    </a>
                </GridCol>
                <GridCol>
                    {component.__typename === "Application" && 
                        renderApplicationDetails(component) }
                    {component.__typename === "WebsiteListing" 
                        && renderWebsiteListing(component) }
                </GridCol>
            </GridRow>
        </SettingsListItem>
    )
};

export default WorkflowComponentItem;
