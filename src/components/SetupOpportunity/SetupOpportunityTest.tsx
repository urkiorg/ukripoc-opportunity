import React from "react";
import renderer from "react-test-renderer";
import { SetupOpportunity } from "./index";

describe("SetupOpportunity", () => (
    it("renders correctly", () => {
        const tree = renderer.create(<SetupOpportunity />).toJSON();
        expect(tree).toMatchSnapshot();
    })
));

