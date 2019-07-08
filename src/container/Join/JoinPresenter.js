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

const JoinPresenter = props => {
  const { handleChange, handleSubmit } = props;
  return (
    <Container>
      <h2>회원가입창</h2>
      {/* <form onSubmit={handleSubmit} method="post"> */}
      <TextBox>
        <TextLabel>이름</TextLabel>
        <TextInput id="name" name="name" type="text" onChange={handleChange} />
      </TextBox>
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
        <SubmitBtn type="submit" onClick={handleSubmit}>
          가입하기
        </SubmitBtn>
        <CancleBtn onClick={() => window.close()}>취소</CancleBtn>
      </ButtonBox>
      {/* </form> */}

      {/* <TextInput name="name" type="text"/> */}
    </Container>
  );
};

export default JoinPresenter;
