import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomeContainer from "./container/Home";
import JoinContainer from "./container/Join";
import LoginContainer from "./container/Login";

const Container = styled.div``;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/join" component={JoinContainer} />
          <Route path="/login" component={LoginContainer} />
        </Container>
      </Router>
    );
  }
}

export default App;
