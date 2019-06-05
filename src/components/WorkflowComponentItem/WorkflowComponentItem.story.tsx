import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentItem } from "./index";

const component = {
    id: "1",
    rank: 0,
    openApplication: "",
    closeApplication: "",
    __typename: "Application"
};

const deleteListing = () => {};

storiesOf("Components|WorkflowComponentList", module).add("Default", () => (
    <WorkflowComponentItem
        component={component}
        deleteListing={deleteListing} />
));
