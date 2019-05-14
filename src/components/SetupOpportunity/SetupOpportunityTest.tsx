import React from "react";
import renderer from "react-test-renderer";
import { SetupOpportunity } from "./index";
import { GetOpportunityQuery } from "../../API";
import { getOpportunityQuery } from "../../fixtures/getOpportunityQuery.json";

const opportunity: GetOpportunityQuery = getOpportunityQuery;

describe("SetupOpportunity", () =>
    it("renders correctly", () => {
        const tree = renderer
            .create(<SetupOpportunity opportunity={opportunity} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    }));
