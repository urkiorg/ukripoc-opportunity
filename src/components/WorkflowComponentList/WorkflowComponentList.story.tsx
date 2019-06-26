import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentList } from "./index";

const orderedOpportunity = [
    {
        __typename: "WebsiteListing" as "WebsiteListing",
        id: "1",
        rank: 0,
        lastPublished: "",
        description: "Test webs site listing"
    },
    {
        __typename: "Application" as "Application",
        id: "1",
        rank: 0,
        openApplication: "",
        closeApplication: "",
        applicationQuestions: {
            items: []
        }
    }
];

storiesOf("Components|WorkflowComponentList", module).add("Default", () => (
    <WorkflowComponentList
        orderedWorkflows={orderedOpportunity}
        opportunityId={"200"}
    />
));
