import React from "react";
import { storiesOf } from "@storybook/react";
import { TestWidget } from "./index";

storiesOf("Components|TestWidget", module).add("Default", () => (
    <TestWidget  />
));
