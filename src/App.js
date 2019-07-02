import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import HomeContainer from "./container/Home";
import HeaderBox from "./components/Header/HeaderBox";

const Container = styled.div``;

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <HeaderBox />
          <Route exact path="/" component={HomeContainer} />
        </Container>
      </Router>
    );
  }
}

export default App;
