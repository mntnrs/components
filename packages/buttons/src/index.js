import { h, Component } from "preact";
import Button from "@ocode/button";
import { buttons, sizes } from "@ocode/constants/lib/buttons";

export default withTheme(
  class Buttons extends Component {
    render({ size, variant, children, ...props }) {
      const b = buttons[variant] || buttons.primary;
      const s = sizes[size] || sizes.default;
      return (
        <Button {...props} {...b} {...s}>
          {children}
        </Button>
      );
    }
  }
);
