import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentList } from "./index";
import { ApplicationType, WebsiteListingType } from "../../types";

const application: ApplicationType  = "Application";
const websiteListing: WebsiteListingType = "WebsiteListing";

const orderedOpportunity = [
    {
        __typename: application,
        id: "1",
        rank: 0,
        lastPublished: "",
        description: "Test webs site listing",
    },
    {
        __typename: websiteListing,
        id: "1",
        rank: 0,
        openApplication: "",
        closeApplication: "",
    },
];

// storiesOf("Components|WorkflowComponentList", module).add("Default", () => (
//     <WorkflowComponentList 
//         orderedOpportunity={orderedOpportunity} />
// ));
