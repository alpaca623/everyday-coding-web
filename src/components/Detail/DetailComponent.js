import React from "react";
import styled from "styled-components";
import { requestAuthDetailApi } from "../../api";

const Container = styled.div``;

const DetailTitle = styled.h2``;

const AuthContent = styled.div``;

class DetailComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      data: {}
    };
  }
  componentDidMount = async () => {
    const {
      match: {
        params: { id }
      }
    } = this.props;
    let data = {};
    try {
      ({ data } = await requestAuthDetailApi(id));
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
        data
      });
    }
  };
  render() {
    const { loading, data } = this.state;
    console.log(data);
    return !loading && data ? (
      <Container>
        <DetailTitle>인증 세부 사항</DetailTitle>
        <AuthContent>{}</AuthContent>
      </Container>
    ) : (
      <Container>
        <DetailTitle>인증 세부 사항</DetailTitle>
        <AuthContent>세부사항 로딩 오류</AuthContent>
      </Container>
    );
  }
}

export default DetailComponent;
