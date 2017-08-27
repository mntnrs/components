// Tell Babel to transform JSX into h() calls:
/** @jsx h */
import { h, render, Component } from "preact";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import styled from 'preact-emotion';

import {{pascalCase name}} from "./src";

storiesOf("{{pascalCase name}}", module).add("usage", () =>
  <div>
    <h1>Variants</h1>
    <{{pascalCase name}}>Stuff?</{{pascalCase name}}>
  </div>
);
