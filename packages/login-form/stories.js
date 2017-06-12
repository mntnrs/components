import { h, render, Component } from "preact";

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import LoginForm from "./src";
import { css } from "fam";

const buttonHolder = css({
  "& *": {
    marginRight: "1rem",
    marginBottom: "1rem"
  }
});
const header = css({
  fontFamily: "system"
});
storiesOf("LoginForm", module).add("usage", () => <LoginForm />);
