import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupApplication } from "./index";

storiesOf("Components|SetupApplication", module).add("Default", () => (
    <SetupApplication
        updateApplication={() => null}
        addQuestion={() => null}
        deleteQuestion={() => null}
    />
));
