import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfilePage from "./pages/profile/profile";
import LandingPage from "./pages/LandingPage/LandingPage";

// Import Components
import Navbar from "./components/navbar/navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/" exact component={Home} />
          <Route path="/profilepage" exact component={ProfilePage} />

          <Route path="/jobbridge/navbar" exact component={Navbar} />
        </Switch>
      </Router>
    );
  }
}

export default App;
