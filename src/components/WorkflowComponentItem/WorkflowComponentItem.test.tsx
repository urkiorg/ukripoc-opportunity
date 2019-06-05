import React from "react";
import renderer from "react-test-renderer";
import { WorkflowComponentItem } from "./index";

const component = {
    id: "1",
    rank: 0,
    openApplication: "",
    closeApplication: "",
    __typename: "Application"
};

const deleteListing = () => {};

describe("WorkflowComponentItem", () => {
    it("renders correctly", () => {
        const tree = renderer.create(    
            <WorkflowComponentItem
                component={component}
                deleteListing={deleteListing} />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

