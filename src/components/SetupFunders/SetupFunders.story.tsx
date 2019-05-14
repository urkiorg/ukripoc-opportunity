import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupFunders } from "./index";
import fundersList from "../../fixtures/funders.json";

storiesOf("Components|SetupFunders", module).add("Default", () => (
    <SetupFunders funders={fundersList} selectedFunders />
));
