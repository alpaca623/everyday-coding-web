import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  align-items: center;
  height: 70px;
  background-color: #2f5b7c;
  color: white;
`;

const LoginBox = styled.div`
  margin-: 20px;
`;

const KakaoLoginBtn = styled.button`
  background-color: Yellow;
`;

class HeaderBox extends React.Component {
  render() {
    return (
      <Header>
        <h1>매일 코딩 인증하기 v 0.1</h1>
        <LoginBox>
          <KakaoLoginBtn>
            {/* <Link to="">카카오 로그인</Link> */}
            <a href="http://localhost:4003/login/kakao">카카오 로그인</a>
          </KakaoLoginBtn>
        </LoginBox>
      </Header>
    );
  }
}

export default HeaderBox;
