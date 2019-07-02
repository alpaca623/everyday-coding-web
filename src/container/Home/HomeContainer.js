import React from "react";
import HomePresenter from "./HomePresenter";
import { requestAuthApi, requestAuthUserListApi } from "../../api";

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      authUserList: []
    };
  }

  componentDidMount = async () => {
    let authUserList;
    try {
      ({ data: authUserList } = await requestAuthUserListApi());
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({
        loading: false,
        authUserList
      });
    }
  };

  requestAuth = data => {
    // console.log("hi", this.props);
    requestAuthApi(data);
  };

  requestAuthUserList = () => {
    return requestAuthUserListApi();
  };

  render() {
    const { loading, authUserList } = this.state;
    return (
      <HomePresenter
        requestAuth={this.requestAuth}
        loading={loading}
        authUserList={authUserList}
      />
    );
  }
}
export default HomeContainer;
