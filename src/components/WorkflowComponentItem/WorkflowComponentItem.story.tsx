import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentItem } from "./index";
import { ApplicationType } from "../../types";

const type: ApplicationType  = "Application";

const component = {
    id: "1",
    rank: 0,
    openApplication: "",
    closeApplication: "",
    __typename: type,
};

const deleteListing = () => {};

storiesOf("Components|WorkflowComponentList", module).add("Default", () => (
    <WorkflowComponentItem
        component={component}
        deleteListing={deleteListing} />
));
