import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupFunders } from "./index";
import fundersList from "../../fixtures/funders.json";
import { GetOpportunityQuery } from "../../API";

const opportunity: GetOpportunityQuery = {
    getOpportunity: {
        id: "675c0700-09c3-4b1c-9292-71f96ef0567e",
        name: "New opp",
        description: "Today",
        funders: {
            items: [],
            nextToken: null,
            __typename: "ModelFunderConnection"
        },
        fundersComplete: null,
        teammembers: {
            items: [],
            nextToken: null,
            __typename: "ModelTeamMemberConnection"
        },
        teammembersComplete: null,
        type: null,
        typeComplete: null,
        __typename: "Opportunity"
    }
};

// storiesOf("Components|SetupFunders", module).add("Default", () => (
//     // <SetupFunders
//     //     funders={fundersList}
//     //     opportunity={opportunity}
//     //     updateOpportunity={() => {}}
//     // />
// ));
