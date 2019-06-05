import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentList } from "./index";

const websiteListings = [{
    id: "1",
    rank: 0,
    lastPublished: "",
    description: "Test webs site listing",
}];

const applications = [{
    id: "1",
    rank: 0,
    openApplication: "",
    closeApplication: "",
}];

// storiesOf("Components|WorkflowComponentList", module).add("Default", () => (
//     <WorkflowComponentList 
//         websiteListings={websiteListings} 
//         applications={applications} />
// ));
