import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentList } from "./index";

const orderedOpportunity = [
    {
        __typename: "Website Listing",
        id: "1",
        rank: 0,
        lastPublished: "",
        description: "Test webs site listing"
    },
    {
        __typename: "Application",
        id: "1",
        rank: 0,
        openApplication: "",
        closeApplication: ""
    }
];

storiesOf("Components|WorkflowComponentList", module).add("Default", () => (
    <WorkflowComponentList orderedWorkflows={orderedOpportunity} />
));
