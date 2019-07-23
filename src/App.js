import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";

import store from "./store";

import HomeContainer from "./container/Home";
import JoinContainer from "./container/Join";
import LoginContainer from "./container/Login";
import DetailComponent from "./components/Detail/DetailComponent";

const Container = styled.div``;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Container>
            <Route exact path="/" component={HomeContainer} />
            <Route path="/join" component={JoinContainer} />
            <Route path="/login" component={LoginContainer} />
            <Route path="/detail/:id" component={DetailComponent} />
          </Container>
        </Router>
      </Provider>
    );
  }
}

export default App;
