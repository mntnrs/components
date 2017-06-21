import { h, render, Component } from "preact";
import { Link } from "preact-router/match";
// Tell Babel to transform JSX into h() calls:
/** @jsx h */

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Navbar from "./src";
import { css } from "fam";

storiesOf("Navbar", module).add("usage", () =>
  <Navbar title="Observable Code">
    <Link activeClassName="active" href="/">Home</Link>
    <Link activeClassName="active" href="/profile">Me</Link>
    <Link activeClassName="active" href="/profile/john">John</Link>
  </Navbar>
);
