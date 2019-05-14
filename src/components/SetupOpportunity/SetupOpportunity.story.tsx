import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupOpportunity } from "./index";
import { GetOpportunityQuery } from "../../API";
import { getOpportunityQuery } from "../../fixtures/getOpportunityQuery.json";

const opportunity: GetOpportunityQuery = getOpportunityQuery;

storiesOf("Components|SetupOpportunity", module).add("Default", () => (
    <SetupOpportunity opportunity={opportunity} />
));
