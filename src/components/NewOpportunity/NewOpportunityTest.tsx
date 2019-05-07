import React from "react";
import renderer from "react-test-renderer";
import { NewOpportunity } from "./index";

describe("NewOpportunity", () =>
    it("renders correctly", () => {
        const tree = renderer
            .create(<NewOpportunity addOpportunity={() => {}} />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    }));
