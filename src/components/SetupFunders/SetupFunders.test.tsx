import React from "react";
import renderer from "react-test-renderer";
import { SetupFunders } from "./index";
import fundersList from "../../fixtures/funders.json";
import { GetOpportunityQuery } from "../../API";
import { updateOpportunity } from "../../graphql/mutations";

const opportunity: GetOpportunityQuery = {
    getOpportunity: {
        id: "675c0700-09c3-4b1c-9292-71f96ef0567e",
        name: "New opp",
        description: "Today",
        funders: ["Other"],
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

describe("SetupFunders", () =>
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <SetupFunders
                    funders={fundersList}
                    currentOpportunity={opportunity}
                    fundersChanged={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    }));
