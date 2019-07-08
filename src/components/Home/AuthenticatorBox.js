import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const AuthBox = styled.div``;

const AuthUserList = styled.div`
  border: 1px solid black;
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  overflow: auto;
`;
const AuthUserBox = styled.div`
  margin: 20px 0;
`;

const AuthUserTitle = styled.span``;

const AuthUserContent = styled.span`
  margin: 0 20px;
`;

const AuthenticatorBox = props => {
  const { loading, authUserList, authClick } = props;
  return (
    <Container>
      <AuthBox>
        <h2>{`${new Date().getFullYear()}년 ${new Date().getMonth() +
          1}월 ${new Date().getDate()}일`}</h2>
        <h3>오늘의 인증자 목록</h3>
        <AuthUserList>
          {!loading &&
          Array.isArray(authUserList) &&
          authUserList.length > 0 ? (
            authUserList.map(authUser => (
              <AuthUserBox key={authUser._id}>
                <AuthUserTitle>{authUser.author}</AuthUserTitle>
                <AuthUserContent onClick={() => authClick(authUser._id)}>
                  {authUser.auth_content}
                </AuthUserContent>
              </AuthUserBox>
            ))
          ) : (
            <AuthUserBox>
              <AuthUserTitle>인증자가 없습니다</AuthUserTitle>
            </AuthUserBox>
          )}
        </AuthUserList>
      </AuthBox>
    </Container>
  );
};

export default AuthenticatorBox;
