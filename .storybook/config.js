import { configure, addDecorator } from "@storybook/react";
import { checkA11y } from 'storybook-addon-a11y';

const req = require.context("../packages/", true, /stories.js/);

addDecorator(checkA11y);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
