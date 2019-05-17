import React from "react";
import renderer from "react-test-renderer";
import { SetupFundersPage } from "./index";

describe("SetupFundersPage", () =>
    it("renders correctly", () => {
        const tree = renderer.create(<SetupFundersPage />).toJSON();
        expect(tree).toMatchSnapshot();
    }));
