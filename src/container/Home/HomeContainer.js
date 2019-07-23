import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import * as certificationActions from "../../store/modules/certification";

import HomePresenter from "./HomePresenter";
import { certificationListApi, certificationCreateApi } from "../../api";
import { todayString } from "../../util";

class HomeContainer extends React.Component {
  // 필요 없음..?
  constructor(props) {
    super(props);
  }

  componentDidMount = async () => {
    let certificationList;
    try {
      ({ data: certificationList } = await this.todayCertificationList());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
        certificationList
      });
    }
  };

  // 인증 생성 요청
  requestCertification = data => {
    certificationCreateApi(data);
  };

  // 오늘의 인증 유저 리스트 요청
  todayCertificationList = () => {
    return certificationListApi();
  };

  // 인증 상세 조회하기
  certificationDetailClick = id => {
    window.open(`/detail/${id}`, "PopupWin", "width=500,height=600");
  };

  render() {
    const { loading, certificationList } = this.props;
    return (
      <HomePresenter
        requestCertification={this.requestCertification}
        loading={false}
        certificationList={certificationList}
        certificationDetailClick={this.certificationDetailClick}
      />
    );
  }
}

// props 값으로 넣어줄 상태를 정의
/**
 * redux에서 이 함수 매개변수에 state를 매칭해준다.
 * 이 state는 store에서 선언한 state가 매칭되어 들어온다.
 */
const mapStateToProps = state => ({ certification: state.certification });

// props 값으로 넣어 줄 액션 함수들을 정의
/**
 * redux에서 이 함수 매개변수에 dispatch를 전달해준다.
 * dispatch로 store에서 선언한 함수들을 사용할 수 있다.
 */
const mapDispatchToProps = dispatch => ({
  CertificationActions: bindActionCreators(certificationActions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer);
