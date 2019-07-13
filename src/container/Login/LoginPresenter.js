import React from "react";
import styled from "styled-components";

import naverLogin from "../../assets/images/login/naver_login_btn.PNG";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  margin-top: 20px;
  margin: 15px 0;
`;

const TextInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid black;
  margin-left: 20px;
`;

const TextLabel = styled.label``;

const ButtonBox = styled.div``;

const SubmitBtn = styled.button``;

const CancleBtn = styled.button``;

const OtherLogin = styled.div``;

const NaverLogin = styled.img`
  width: 100px;
`;

const LoginPresenter = props => {
  const { handleChange, handleSubmit, handleNaver } = props;
  return (
    <Container>
      <h2>매일 코딩 인증 web</h2>
      <form onSubmit={handleSubmit} method="post">
        <TextBox>
          <TextLabel>이메일</TextLabel>
          <TextInput
            id="email"
            name="email"
            type="text"
            onChange={handleChange}
          />
        </TextBox>
        <TextBox>
          <TextLabel>암호</TextLabel>
          <TextInput
            id="password"
            name="password"
            type="password"
            onChange={handleChange}
          />
        </TextBox>
        <OtherLogin>
          <NaverLogin src={naverLogin} onClick={handleNaver} />
        </OtherLogin>
        <ButtonBox>
          <SubmitBtn type="submit">로그인</SubmitBtn>
          <CancleBtn onClick={() => window.close()}>취소</CancleBtn>
        </ButtonBox>
      </form>

      {/* <TextInput name="name" type="text"/> */}
    </Container>
  );
};

export default LoginPresenter;
