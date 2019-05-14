import React from "react";
import renderer from "react-test-renderer";
import { TestWidget } from "./index";

describe("TestWidget", () => (
    it("renders correctly", () => {
        const tree = renderer.create(<TestWidget />).toJSON();
        expect(tree).toMatchSnapshot();
    })
));

