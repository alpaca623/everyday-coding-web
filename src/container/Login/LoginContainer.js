import React from "react";
import LoginPresenter from "./LoginPresenter";

class LoginContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };
  }
  handleSubmit = () => {
    console.log(this.state);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <LoginPresenter
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
export default LoginContainer;
