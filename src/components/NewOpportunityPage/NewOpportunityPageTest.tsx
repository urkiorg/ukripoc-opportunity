import React from "react";
import renderer from "react-test-renderer";
import { NewOpportunityPage } from "./index";

describe("NewOpportunityPage", () => (
    it("renders correctly", () => {
        const tree = renderer.create(<NewOpportunityPage />).toJSON();
        expect(tree).toMatchSnapshot();
    })
));

