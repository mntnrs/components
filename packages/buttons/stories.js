// Tell Babel to transform JSX into h() calls:
/** @jsx h */
import { h, render, Component } from "preact";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { buttons, sizes } from "@ocode/constants/lib/buttons";
import styled from "preact-emotion";

import Button from "./src";

const ButtonHolder = styled.div`
  & * {
    margin-right: 1rem;
    margin-bottom: 1rem;
  }
`;

storiesOf("Buttons", module).add("usage", () =>
  <div>
    <h1>Variants</h1>
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
