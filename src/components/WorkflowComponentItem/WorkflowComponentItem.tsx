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

export default WorkflowComponentItem;
