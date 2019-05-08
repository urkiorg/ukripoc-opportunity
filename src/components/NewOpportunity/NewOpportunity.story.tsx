import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { NewOpportunity } from "./index";

storiesOf("Components|NewOpportunity", module).add("Default", () => (
    <NewOpportunity addOpportunity={action("New opportunity")} />
));
