import React from "react";
import JoinPresenter from "./JoinPresenter";
import { requestJoin } from "../../api";

class JoinContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: ""
    };
  }
  handleSubmit = () => {
    const result = requestJoin(this.state);
    console.log("restu", result);
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <JoinPresenter
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}
export default JoinContainer;
