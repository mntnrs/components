import { lighten, darken } from "polished";
import colors from "./colors";

export const buttons = {
  primary: {
    color: "white",
    backgroundColor: colors.brand,
    borderColor: colors.brand,
    disabledColor: lighten(0.2, colors.brand),
    hoverBackgroundColor: darken(0.2, colors.brand),
    hoverBackgroundBordercolor: darken(0.2, colors.brand)
  },
  digital: {
    borderColor: colors.digitalBlue,
    backgroundColor: colors.digitalBlue,
    color: "#fff",
    disabledColor: lighten(0.2, colors.digitalBlue),
    hoverBackgroundColor: darken(0.2, colors.digitalBlue),
    hoverBackgroundBordercolor: darken(0.2, colors.digitalBlue)
  },

  success: {
    borderColor: colors.success,
    backgroundColor: colors.success,
    color: "#fff",
    disabledColor: lighten(0.2, colors.success),
    hoverBackgroundColor: darken(0.2, colors.success),
    hoverBackgroundBordercolor: darken(0.2, colors.success)
  },
  warning: {
    borderColor: colors.warning,
    backgroundColor: colors.warning,
    color: "#fff",
    disabledColor: lighten(0.2, colors.warning),
    hoverBackgroundColor: darken(0.2, colors.warning),
    hoverBackgroundBordercolor: darken(0.2, colors.warning)
  },
  alert: {
    borderColor: colors.alert,
    backgroundColor: colors.alert,
    color: "#fff",
    disabledColor: lighten(0.2, colors.alert),
    hoverBackgroundColor: darken(0.2, colors.alert),
    hoverBorderColor: darken(0.2, colors.alert)
  }
};

export const sizes = {
  xsmall: {
    paddingX: ".5rem",
    paddingY: ".2rem",
    fontSize: ".75rem",
    lineHeight: "1.5"
  },
  small: {
    paddingX: ".75rem",
    paddingY: ".25rem",
    fontSize: ".85rem",
    lineHeight: "1.5"
  },
  default: {
    paddingX: "1rem",
    paddingY: ".375rem",
    fontSize: "1rem",
    lineHeight: "1.5"
  },
  large: {
    variant: "large",
    paddingX: "1.25rem",
    paddingY: ".75rem",
    fontSize: "1.25rem",
    lineHeight: 4 / 3
  }
};
