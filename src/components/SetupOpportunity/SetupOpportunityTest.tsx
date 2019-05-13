import React from "react";
import renderer from "react-test-renderer";
import { SetupOpportunity } from "./index";
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
        teammembers: {
            items: [],
            nextToken: null,
            __typename: "ModelTeamMemberConnection"
        },
        type: null,
        __typename: "Opportunity"
    }
};

describe("SetupOpportunity", () =>
    it("renders correctly", () => {
        const tree = renderer
            .create(<SetupOpportunity opportunity={opportunity} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    }));
