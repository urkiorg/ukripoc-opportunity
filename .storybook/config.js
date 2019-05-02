import React from "react";
import { configure } from "@storybook/react";

const req = require.context("../src/", true, /\.story\.[tj]sx?$/);
function loadStories() {
  req.keys().forEach(function(filename) {
    return req(filename);
  });
}

configure(loadStories, module);
