import React from "react";
import renderer from "react-test-renderer";
import { WorkflowComponentList } from "./index";

describe("WorkflowComponentList", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<WorkflowComponentList />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

