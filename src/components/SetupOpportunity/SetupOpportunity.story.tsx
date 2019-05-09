import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupOpportunity } from "./index";

storiesOf("Components|SetupOpportunity", module).add("Default", () => (
    <SetupOpportunity opportunityId="hello" />
));
