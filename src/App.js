import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage/LandingPage";

// Import Components
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/" exact component={Home} />
          <Route path="/jobbridge/landing-page" exact component={LandingPage} />

          {/* Route Components */}
          <Route path="/jobbridge/navbar" exact component={Navbar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
