import { css } from "fam";
import { h, Component } from "preact";
// import { buttons, sizes } from "@ocode/constants/lib/buttons";

const CSS = css({
  fontFamily: "system"
});

export default class {{pascalCase name}} extends Component {
  render(props) {
    return (
      <div class={CSS} {...props}>
        {children}
      </div>
    );
  }
}
