import { h, Component } from "preact";
import { css } from "fam";
import colors from '@ocode/constants/lib/colors';

const header = css({
  fontFamily: "system",
  position: "fixed",
  left: "0",
  top: "0",
  width: "100%",
  height: "56px",
  padding: "0",
  background: 'white',
  boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
  "& nav": {
    float: "right",
    fontSize: "100%"
  },
  "& a": {
    boxSizing: 'border-box',
    borderBottomWidth: '1px',
    borderBottomStyle: 'solid',
    borderColor: 'white',
    display: "inline-block",
    height: "56px",
    lineHeight: "56px",
    padding: "0 15px",
    minWidth: "50px",
    textAlign: "center",
    background: 'white',
    textDecoration: "none",
    color: "#66757f",
    willChange: "background-color;border-color",

    "&:hover": {
      color: colors.brand,
      borderColor: colors.brand,
      backgroundColor: '#feebf7',
    },
    "&:active": {
      color: colors.brand,
      borderColor: colors.brand,
      backgroundColor: '#feebf7',
    },

    "&.active": {
      color: colors.brand,
      borderColor: colors.brand,
      backgroundColor: '#feebf7',
    }
  }
});

const h1CSS = css({
  float: "left",
  margin: "0",
  padding: "0 15px",
  fontSize: "24px",
  lineHeight: "56px",
  fontWeight: "400",
  color: colors.brand
});

export default class HeaderNavigation extends Component {
  render({ title, children }) {
    return (
      <header class={header}>
        <h1 class={h1CSS}>{title}</h1>
        <nav>
          {children}
        </nav>
      </header>
    );
  }
}
