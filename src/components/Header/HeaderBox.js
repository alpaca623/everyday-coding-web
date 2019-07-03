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

const JoinBtn = styled.button``;

class HeaderBox extends React.Component {
  render() {
    return (
      <Header>
        <h1>
          <Link to="/">매일 코딩 인증하기 v 0.1</Link>
        </h1>
        <LoginBox>
          {/* <KakaoLoginBtn>
            <a href="http://localhost:4003/login/kakao">카카오 로그인</a>
          </KakaoLoginBtn> */}
          <JoinBtn
            onClick={() =>
              window.open("/join", "PopupWin", "width=500,height=600")
            }
          >
            가입하기
          </JoinBtn>
          <JoinBtn
            onClick={() =>
              window.open("/login", "PopupWin", "width=500,height=600")
            }
          >
            로그인
          </JoinBtn>
        </LoginBox>
      </Header>
    );
  }
}

export default HeaderBox;
