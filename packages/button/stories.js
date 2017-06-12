import { h, render, Component } from "preact";

// Tell Babel to transform JSX into h() calls:
/** @jsx h */

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from ".";
import { buttons, sizes } from "@ocode/constants/lib/buttons";
import { css } from "fam";

const buttonHolder = css({
  "& *": {
    marginRight: "1rem",
    marginBottom: "1rem"
  }
});
storiesOf("Button", module).add("usage", () =>
  <div>
    <h1>Variants</h1>
    <div className={buttonHolder}>
      {Object.keys(buttons).map(key =>
        <Button variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </div>
    <div className={buttonHolder}>
      {Object.keys(buttons).map(key =>
        <Button ghost variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </div>

    <div className={buttonHolder}>
      {Object.keys(buttons).map(key =>
        <Button circle variant={key} onClick={action(`clicked ${key}`)}>
          a
        </Button>
      )}
    </div>

    <div className={buttonHolder}>
      {Object.keys(buttons).map(key =>
        <Button circle ghost variant={key} onClick={action(`clicked ${key}`)}>
          a
        </Button>
      )}
    </div>

    <h1>Disabled</h1>
    <div className={buttonHolder}>
      {Object.keys(buttons).map(key =>
        <Button disabled variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </div>
    <div className={buttonHolder}>
      {Object.keys(buttons).map(key =>
        <Button ghost disabled variant={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </div>

    <h1>Sizes</h1>
    <div className={buttonHolder}>
      {Object.keys(sizes).map(key =>
        <Button size={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </div>
    <div className={buttonHolder}>
      {Object.keys(sizes).map(key =>
        <Button ghost size={key} onClick={action(`clicked ${key}`)}>
          {key}
        </Button>
      )}
    </div>
  </div>
);
