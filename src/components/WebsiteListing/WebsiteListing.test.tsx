import React from "react";
import renderer from "react-test-renderer";
import { WebsiteListing } from "./index";

describe("WebsiteListing", () => {
    it("renders correctly", () => {
        const tree = renderer
            .create(
                <WebsiteListing
                    updateWebsiteListing={() => {}}
                />
            )
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});
