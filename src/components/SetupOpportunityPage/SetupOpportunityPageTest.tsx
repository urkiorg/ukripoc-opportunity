import React from "react";
import renderer from "react-test-renderer";
import { SetupOpportunityPage } from "./index";

describe("SetupOpportunityPage", () => (
    it("renders correctly", () => {
        const tree = renderer.create(<SetupOpportunityPage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
));

