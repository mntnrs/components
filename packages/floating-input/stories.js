import { h, render, Component } from "preact";

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Input from "./src";
import { css } from "fam";

const buttonHolder = css({
  "& *": {
    marginRight: "1rem",
    marginBottom: "1rem"
  }
});
storiesOf("Input", module).add("usage", () =>
  <div>
    <h1>Variants</h1>
    <div className={buttonHolder}>
      <Input label="Email" />
    </div>
  </div>
);
