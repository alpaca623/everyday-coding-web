import React from "react";
import styled from "styled-components";
import AuthenticationBox from "../../components/Home/AuthenticationBox";
import AuthenticatorBox from "../../components/Home/AuthenticatorBox";
import HeaderBox from "../../components/Header/HeaderBox";

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

const HomePresenter = props => {
  const { authClick, loading, authUserList, requestAuth } = props;
  return (
    <Container>
      <HeaderBox />
      <Main>
        <AuthenticationBox requestAuth={requestAuth} />
        <AuthenticatorBox
          loading={loading}
          authClick={authClick}
          authUserList={authUserList}
        />
      </Main>
    </Container>
  );
};

export default HomePresenter;
