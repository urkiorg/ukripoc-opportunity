import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupFunders } from "./index";
import fundersList from "../../fixtures/funders.json";
import { GetOpportunityQuery } from "../../API";
import { getOpportunityQuery } from "../../fixtures/getOpportunityQuery.json";

const opportunity: GetOpportunityQuery = getOpportunityQuery;

storiesOf("Components|SetupFunders", module).add("Default", () => (
    <SetupFunders funders={fundersList} opportunity={opportunity} />
));
