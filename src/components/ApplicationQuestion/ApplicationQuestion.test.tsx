import React from "react";
import renderer from "react-test-renderer";
import { ApplicationQuestion } from "./index";

describe("ApplicationQuestion", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<ApplicationQuestion />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

