import React from "react";
import renderer from "react-test-renderer";
import { SetupFunders } from "./index";
import fundersList from "../../fixtures/funders.json";

describe("SetupFunders", () =>
    it("renders correctly", () => {
        const tree = renderer
            .create(<SetupFunders funders={fundersList} selectedFunders />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    }));
