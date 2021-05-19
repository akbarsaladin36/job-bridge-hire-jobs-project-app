import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProfilePage from "./pages/profile/profile";
import Hire from "./pages/Hire/hire";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfileWorker from "./pages/Worker/ProfileWorker/ProfileWorker";
import EditWorker from "./pages/Worker/EditWorker/EditWorker";
import Chat from "./pages/Chat/Chat";

// Import Components
import NavBar from "./components/navbar/navbar";
import UploadImage from "./components/UploadImage/UploadImage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/" exact component={Home} />
          <Route path="/profilepage" exact component={ProfilePage} />
          <Route path="/hire" exact component={Hire} />

          <Route path="/jobbridge/navbar" exact component={NavBar} />
          <Route path="/jobbridge/upload-image" exact component={UploadImage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
