import { css } from "fam";
import { h } from "preact";
import { buttons, sizes } from "@ocode/constants/lib/buttons";

const sizeF = size => {
  const { paddingY, paddingX, fontSize, lineHeight } =
    sizes[size] || sizes.default;
  return css({
    paddingTop: paddingY,
    paddingBottom: paddingY,
    paddingLeft: paddingX,
    paddingRight: paddingX,
    fontSize: fontSize,
    lineHeight: lineHeight
  });
};

const hoverCSS = ({ color, hoverBG, hoverBackgroundColor, hoverBorderColor }) =>
  css({
    color: color,
    backgroundColor: hoverBackgroundColor,
    borderColor: hoverBorderColor
  });
const disabledCSS = ({ backgroundColor, borderColor, disabledColor }) =>
  css({
    "&:hover": {
      backgroundColor: backgroundColor,
      borderColor: borderColor
    },
    "&:focus": {
      backgroundColor: backgroundColor,
      borderColor: borderColor
    }
  });
const buttonF = variant => {
  const {
    color,
    backgroundColor,
    borderColor,
    hoverBorderColor,
    hoverBackgroundColor
  } =
    buttons[variant] || buttons["primary"];
  return css({
    color: color,
    backgroundColor: backgroundColor,
    borderColor: borderColor,

    "&:focus": hoverCSS({ color, hoverBackgroundColor, hoverBorderColor }),
    "&:active": hoverCSS({ color, hoverBackgroundColor, hoverBorderColor }),
    "&:hover": hoverCSS({ color, hoverBackgroundColor, hoverBorderColor }),
    "&:active": {
      /* Remove the gradient for the pressed/active state */
      backgroundImage: "none",
      boxShadow: "inset 0 3px 5px rgba(0,0,0,.125)"
    },
    "&:disabled": disabledCSS({ backgroundColor, borderColor }),
    "fieldset[disabled] &": disabledCSS({
      backgroundColor,
      borderColor
    })
  });
};

const ghostF = variant => {
  const { borderColor, disabledColor } = buttons[variant] || buttons["primary"];
  return css({
    color: borderColor,
    backgroundImage: "none",
    backgroundColor: "transparent",
    borderColor: borderColor,

    "&:focus": {
      color: "#fff",
      backgroundColor: borderColor,
      borderColor: borderColor
    },
    "&:active": {
      color: "#fff",
      backgroundColor: borderColor,
      borderColor: borderColor
    },
    "&:hover": {
      color: "#fff",
      backgroundColor: borderColor,
      borderColor: borderColor
    },

    "&:disabled": {
      "&:hover": {
        borderColor: disabledColor
      },
      "&:focus": {
        borderColor: disabledColor
      }
    },
    "fieldset[disabled] &": {
      "&:hover": {
        borderColor: disabledColor
      },
      "&:focus": {
        borderColor: disabledColor
      }
    }
  });
};

const buttonCSS = css({
  fontFamily: "system",
  display: "inline-block",
  fontWeight: 400,
  textAlign: "center",
  whiteSpace: "nowrap",
  verticalAlign: "middle",
  touchAction: "manipulation",
  cursor: "pointer",
  userSelect: "none",
  border: ".0625rem solid transparent",
  transition: "all .1s ease-out",
  "&:active:focus": {
    /* Default */
    outline: "thin dotted",
    /* WebKit */
    outline: "5px auto -webkit-focus-ring-color",
    outlineOffset: "-2px"
  },

  "&:hover": {
    textDecoration: "none"
  },
  "&:focus": {
    textDecoration: "none"
  },

  "&:active": {
    backgroundImage: "none",
    outline: 0,
    boxShadow: "inset 0 3px 5px rgba(0,0,0,.125)"
  },

  "&:disabled": {
    cursor: "not-allowed",
    opacity: ".65",
    boxShadow: "none"
  },
  "fieldset[disabled] &": {
    cursor: "not-allowed",
    opacity: ".65",
    boxShadow: "none"
  }
});

export default ({
  children,
  circle,
  className,
  expand,
  ghost,
  size,
  variant,
  ...props
}) => {
  return (
    <button
      className={css(
        buttonCSS,
        ghost ? ghostF(variant) : buttonF(variant),
        sizeF(size),
        circle ? css({ borderRadius: "10em" }) : null
      )}
      {...props}
    >
      {children}
    </button>
  );
};
