import React from "react";
import renderer from "react-test-renderer";
import { UkriFooter } from "./index";

describe("UkriFooter", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<UkriFooter />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

