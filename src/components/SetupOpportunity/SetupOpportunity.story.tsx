import React from "react";
import { storiesOf } from "@storybook/react";
import { SetupOpportunity } from "./index";
import { GetOpportunityQuery } from "../../API";

// const opportunity: GetOpportunityQuery = {
//     getOpportunity: {
//         id: "675c0700-09c3-4b1c-9292-71f96ef0567e",
//         name: "New opp",
//         description: "Today",
//         funders: ["Other"],
//         fundersComplete: null,
//         teammembers: {
//             items: [],
//             nextToken: null,
//             __typename: "ModelTeamMemberConnection"
//         },
//         teammembersComplete: null,
//         type: null,
//         typeComplete: null,
//         __typename: "Opportunity"
//     }
// };

// storiesOf("Components|SetupOpportunity", module).add("Default", () => (
//     <SetupOpportunity opportunity={opportunity} />
// ));
