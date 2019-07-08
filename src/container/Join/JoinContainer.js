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
    if (this.state.email === "") {
      alert("이름을 입력해주세요");
      return;
    }
    if (this.state.name === "") {
      alert("이메일을 입력해주세요");
      return;
    }

    requestJoin(this.state).then(o => {
      console.log(o);
      if (o.data.status) {
        alert("회원가입이 되었습니다! 환영합니다 :)");
        window.close();
      } else {
        if (this.state.name === o.data.user.name) {
          alert("이미 이름이 등록되어있습니다. 다른 이름을 입력해주세요");
        }
        if (this.state.email === o.data.user.email) {
          alert("이미 이메일이 등록되어있습니다. 다른 이메일을 입력해주세요");
        }
      }
    });
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
