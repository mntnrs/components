import { css } from "fam";
import { h, Component } from "preact";
import colors from "@ocode/constants/lib/colors";

const field = css({
  position: "relative",
  maxWidth: "250px"
});

const fieldLabel = css({
  color: "#919293",
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
  transition: "all .2s ease-out",
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
  backgroundColor: "#f5f5f5",
  border: "2px solid #e9e9e9",
  color: "#333",
  fontSize: "1.3125em",
  padding: ".4761904762em",
  transition: "all .2s ease-out",
  width: "100%",
  "&:hover": {
    boxShadow: "inset 0 0 10px 0 rgba(85, 85, 85, .1)",
    outline: 0
  },
  "&:focus": {
    boxShadow: "inset 0 0 10px 0 rgba(85, 85, 85, .1)",
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
  onChange = e => {
    this.setState(({ active }) => ({
      active: !!e.currentTarget.value
    }));
  };
  render() {
    const { className, label, ...props } = this.props;
    console.log(this.state.active);
    const classes = this.state.active && "field--not-empty";
    return (
      <div className={`${field} ${classes}`}>
        <label className={fieldLabel}>{label}</label>
        <input
          className={fieldInput}
          type="text"
          placeholder={label}
          onInput={this.onChange}
          {...props}
        />
      </div>
    );
  }
}
