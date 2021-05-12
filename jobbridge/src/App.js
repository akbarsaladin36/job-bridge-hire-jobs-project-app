import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
