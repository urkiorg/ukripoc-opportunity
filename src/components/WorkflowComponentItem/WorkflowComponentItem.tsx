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

export const WorkflowComponentItem: FC<Props> = ({deleteListing, component}) => {
    const formattedName = niceName[formatCasing(component.__typename) as keyof ApplicationTypes];
    const listingLink = `/component/${formattedName}/${component.id}`;
    
    return (
        <SettingsListItem>
            <GridRow>
                <GridCol setWidth="90%">
                    <Link to={listingLink}>{formattedName}</Link>
                    { component.rank }
                </GridCol>
                <GridCol>
                    <button onClick={() => deleteListing(component.id)}>
                        Remove
                    </button>
                </GridCol>
            </GridRow>
        </SettingsListItem>
    )
};

export default WorkflowComponentItem;
