import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const AuthBox = styled.div`
  margin: 20px 0;
  display: flex;
`;

const AuthInput = styled.div`
  display: flex;
  flex-direction: column;
`;

const AuthType = styled.select`
  width: 110px;
`;

const AuthContent = styled.textarea`
  margin-top: 20px;
`;

const AuthBtn = styled.button`
  margin-left: 30px;
  height: 150px;
  width: 150px;
`;

class AuthenticationBox extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      auth_type: "0",
      auth_content: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRequest = () => {
    if (this.state.auth_type === "0") {
      alert("인증 종류를 선택해주세요");
      return;
    }
    if (this.state.auth_content === "") {
    }
    this.props.requestAuth(this.state);
    this.setState({ auth_type: "0", auth_content: "" });
  };

  render() {
    return (
      <Container>
        <form onSubmit={this.handleRequest}>
          <AuthBox>
            <AuthInput>
              <AuthType
                name="auth_type"
                onChange={this.handleChange}
                value={this.state.auth_type}
              >
                <option value="0">선택하세요</option>
                <option value="1">github</option>
              </AuthType>
              <AuthContent
                placeholder="인증내용을 입력해주세요"
                cols="30"
                rows="10"
                name="auth_content"
                onChange={this.handleChange}
                value={this.state.auth_content}
              />
            </AuthInput>
            <AuthBtn type="submit">인증하기</AuthBtn>
          </AuthBox>
        </form>
      </Container>
    );
  }
}

export default AuthenticationBox;
