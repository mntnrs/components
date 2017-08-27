import { h, Component } from "preact";
import Button from '@ocode/button';
// import { buttons, sizes } from "@ocode/constants/lib/buttons";

export default class {{pascalCase name}} extends Component {
  render(props) {
    return (
      <Button {...props}>
        {children}
      </Button>
    );
  }
}
