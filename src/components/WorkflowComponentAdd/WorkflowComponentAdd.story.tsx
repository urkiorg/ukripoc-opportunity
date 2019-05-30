import React from "react";
import { storiesOf } from "@storybook/react";
import { WorkflowComponentAdd } from "./index";

storiesOf("Components|WorkflowComponentAdd", module).add("Default", () => (
    <WorkflowComponentAdd opportunityId={"1"} />
));
