import React from "react";
import HomePresenter from "./HomePresenter";
import { certificationListApi, certificationCreateApi } from "../../api";
import { todayString } from "../../util";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      certificationList: []
    };
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
    const { loading, certificationList } = this.state;
    return (
      <HomePresenter
        requestCertification={this.requestCertification}
        loading={loading}
        certificationList={certificationList}
        certificationDetailClick={this.certificationDetailClick}
      />
    );
  }
}
export default HomeContainer;
