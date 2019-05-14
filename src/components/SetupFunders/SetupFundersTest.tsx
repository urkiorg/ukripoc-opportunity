import React from "react";
import renderer from "react-test-renderer";
import { SetupFunders } from "./index";
import fundersList from "../../fixtures/funders.json";
import { getOpportunityQuery } from "../../fixtures/getOpportunityQuery.json";
import { GetOpportunityQuery } from "../../API";

const opportunity: GetOpportunityQuery = getOpportunityQuery;

describe("SetupFunders", () =>
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <SetupFunders funders={fundersList} opportunity={opportunity} />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    }));
