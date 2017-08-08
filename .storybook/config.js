import { configure, addDecorator } from "@storybook/react";
import { checkA11y } from "storybook-addon-a11y";

/**
 * Regex should match
 * `./login-form/stories.js`
 * but not match
 * `./login-form/node_modules/@ocode/button/stories.js`
 */
const req = require.context(
  "../packages/",
  true,
  /^.\/[\w-]*(?!node_modules)\/stories.js/
);

addDecorator(checkA11y);
function loadStories() {
  // req.keys is all of the files that matched the req regex
  // ['./button/stories.js']
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
