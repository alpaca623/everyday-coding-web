import React from "react";
import styled from "styled-components";
import AuthenticationBox from "../../components/Home/AuthenticationBox";
import AuthenticatorBox from "../../components/Home/AuthenticatorBox";

const Container = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const HomePresenter = props => (
  <Container>
    <Main>
      <AuthenticationBox requestAuth={props.requestAuth} />
      <AuthenticatorBox authUserList={props.authUserList} />
    </Main>
  </Container>
);

export default HomePresenter;
