import React from "react";
import renderer from "react-test-renderer";
import { AllOpportunities } from "./index";

describe("AllOpportunities", () => (
    it("renders correctly", () => {
        const tree = renderer.create(<AllOpportunities />).toJSON();
        expect(tree).toMatchSnapshot();
    })
));

