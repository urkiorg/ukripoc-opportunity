import React from "react";
import renderer from "react-test-renderer";
import { WorkflowComponentList } from "./index";

const orderedOpportunity = [
    {
        __typename: "Website Listing",
        id: "1",
        rank: 0,
        lastPublished: "",
        description: "Test webs site listing",
    },
    {
        __typename: "Application",
        id: "1",
        rank: 0,
        openApplication: "",
        closeApplication: "",
    },
];

describe("WorkflowComponentList", () => {
    it("renders correctly", () => {
        const tree = renderer.create(<WorkflowComponentList orderedOpportunity={ orderedOpportunity } />).toJSON();
        expect(tree).toMatchSnapshot();
    })
});

