import { css } from "fam";
import { h, Component } from "preact";
import Button from "@ocode/button";
import Input from "@ocode/floating-input";

css.insert("body { background-color: #efefef; }");
const card = css({
  backgroundColor: "white",
  padding: "1rem"
});

export default class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  onChange = name => e => {
    console.log(name, e);
    this.setState(state => ({
      ...state,
      [name]: e.target.value
    }));
  };
  render() {
    const { className, label, ...props } = this.props;
    const classes = this.state.active && "field--not-empty";
    return (
      <div className={card}>
        <Input label="Username" onChange={this.onChange("username")} />
        <Input label="Password" onChange={this.onChange("password")} />
        <Button onClick={() => console.log(this.state)}>Submit</Button>
      </div>
    );
  }
}
