import { h, render, Component } from "preact";

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {{pascalCase name}} from ".";
import { css } from "fam";

storiesOf("{{pascalCase name}}", module).add("usage", () =>
  <div>
    <h1>Variants</h1>
    <{{pascalCase name}}>Stuff?</{{pascalCase name}}>
  </div>
);
