import React from "react";
import renderer from "react-test-renderer";
import { WorkflowComponentItem } from "./index";

describe("WorkflowComponentItem", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<WorkflowComponentItem />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

