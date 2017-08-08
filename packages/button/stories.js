import { h, render, Component } from "preact";

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from ".";
import * as buttonProps from "@ocode/constants/lib/buttons";
import styled, { css } from "emotion/react";

const ButtonHolder = styled.div`
  & * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

const PrimaryButton = props => {
  return <Button {...props} {...buttonProps} />;
};

const buttons = {};
const sizes = {};

storiesOf("Button", module).add("usage", () =>
  <div>
    <PrimaryButton>Test</PrimaryButton>
    <h1>Variants</h1>
    <ButtonHolder>
      <Button borderColor="blue" onClick={action(`clicked asdflkj`)}>
        raw button
      </Button>
    </ButtonHolder>
    <ButtonHolder>
      {Object.keys(buttons).map(key =>
        <Button ghost variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </ButtonHolder>

    <h1>Disabled</h1>
    <ButtonHolder>
      {Object.keys(buttons).map(key =>
        <Button disabled variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </ButtonHolder>
    <ButtonHolder>
      {Object.keys(buttons).map(key =>
        <Button ghost disabled variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </ButtonHolder>

    <h1>Sizes</h1>
    <ButtonHolder>
      {Object.keys(sizes).map(key =>
        <Button size={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </ButtonHolder>
    <ButtonHolder>
      {Object.keys(sizes).map(key =>
        <Button ghost size={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </ButtonHolder>

    <h1>href</h1>
    <ButtonHolder>
      {Object.keys(sizes).map(key =>
        <Button
          href="https://github.com/developit/preact-cli"
          size={key}
          onClick={action(`clicked ${key}`)}
        >
          {key}
        </Button>
      )}
    </ButtonHolder>
  </div>
);
