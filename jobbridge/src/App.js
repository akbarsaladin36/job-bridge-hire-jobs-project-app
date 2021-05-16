import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import LandingPage from "./pages/LandingPage/LandingPage";
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/" exact component={Home} />
          <Route path="/jobbridge/landing-page" exact component={LandingPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
