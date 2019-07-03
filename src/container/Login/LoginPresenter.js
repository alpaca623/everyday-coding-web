import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

const TextBox = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const TextInput = styled.input`
  width: 200px;
  height: 30px;
  border: 1px solid black;
  margin: 15px 0;
`;

const TextLabel = styled.label``;

const ButtonBox = styled.div``;

const SubmitBtn = styled.button``;

const CancleBtn = styled.button``;

const LoginPresenter = props => {
  const { handleChange, handleSubmit } = props;
  return (
    <Container>
      <h2>로그인 창</h2>
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
