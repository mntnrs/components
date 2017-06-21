import { css } from "fam";
import { h, Component } from "preact";
import colors from "@ocode/constants/lib/colors";

const field = css({
  boxSizing: "border-box",
  position: "relative"
});

const fieldLabel = css({
  boxSizing: "border-box",
  fontFamily: "system",
  color: colors.brand,
  boxSizing: "border-box",
  display: "block",
  fontSize: ".8125em",
  lineHeight: 1,
  opacity: 0,
  overflow: "hidden",
  padding: ".5em 1em",
  pointerEvents: "none",
  position: "absolute",
  textOverflow: "ellipsis",
  top: 0,
  textAlign: "left",
  transform: "translateY(3px)",
  transition: "all .1s ease-out",
  userSelect: "none",
  whiteSpace: "nowrap",
  width: "100%",
  zIndex: 1,
  ".field--not-empty &": {
    opacity: 1,
    transform: "none"
  }
});

const fieldInput = css({
  boxSizing: "border-box",
  backgroundColor: "transparent",
  border: "2px solid #e9e9e9",
  color: "#333",
  fontSize: "1.3125em",
  padding: ".4761904762em",
  transition: "all .1s ease-out",
  width: "100%",
  "&:hover": {
//    boxShadow: `inset 0 0 10px 0 ${colors.brand}`,
    borderColor: colors.brand,
    outline: 0
  },
  "&:focus": {
//    boxShadow: "inset 0 0 10px 0 rgba(85, 85, 85, .1)",
    borderColor: colors.brand,
    color: colors.brand,
    outline: 0
  },
  ".field--not-empty &": {
    paddingBottom: "2px",
    paddingTop: "18px"
  },
  "::-webkit-input-placeholder": {
    /* Chrome/Opera/Safari */
    color: "#919293"
  },
  "::-moz-placeholder": {
    /* Firefox 19+ */
    color: "#919293"
  },
  ":-ms-input-placeholder": {
    /* IE 10+ */
    color: "#919293"
  },
  ":-moz-placeholder": {
    /* Firefox 18- */
    color: "#919293"
  }
});

export default class Input extends Component {
  state = {
    active: false
  };
  onInput = e => {
    this.setState(({ active }) => ({
      active: !!e.currentTarget.value
    }));
  };
  render() {
    const { className, label, ...props } = this.props;
    const classes = this.state.active && "field--not-empty";
    return (
      <div className={`${field} ${classes}`}>
        <label className={fieldLabel}>{label}</label>
        <input
          aria-label={label}
          className={fieldInput}
          type="text"
          placeholder={label}
          onInput={this.onInput}
          {...props}
        />
      </div>
    );
  }
}
