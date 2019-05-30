import React from "react";
import renderer from "react-test-renderer";
import { WorkflowComponentAdd } from "./index";

describe("WorkflowComponentAdd", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(<WorkflowComponentAdd opportunityId={"1"} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
