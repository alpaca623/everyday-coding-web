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
      certification_type: "0",
      certification_content: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleRequest = () => {
    if (this.state.certification_type === "0") {
      alert("인증 종류를 선택해주세요");
      return;
    }
    if (this.state.certification_content === "") {
    }
    this.props.requestCertification(this.state);
    this.setState({ certification_type: "0", certification_content: "" });
  };

  render() {
    return (
      <Container>
          <AuthBox>
            <AuthInput>
              <AuthType
                name="certification_type"
                onChange={this.handleChange}
                value={this.state.certification_type}
              >
                <option value="0">선택하세요</option>
                <option value="1">github</option>
              </AuthType>
              <AuthContent
                placeholder="인증내용을 입력해주세요"
                cols="30"
                rows="10"
                name="certification_content"
                onChange={this.handleChange}
                value={this.state.certification_content}
              />
            </AuthInput>
            <AuthBtn onClick={this.handleRequest}>인증하기</AuthBtn>
          </AuthBox>
      </Container>
    );
  }
}

export default AuthenticationBox;
