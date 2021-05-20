import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import EditRecruiter from "./pages/Recruiter/EditRecruiter/profile";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfileWorker from "./pages/Worker/ProfileWorker/ProfileWorker";
import EditWorker from "./pages/Worker/EditWorker/EditWorker";
import Chat from "./pages/Chat/Chat";
import ProfileRecruiter from "./pages/Recruiter/ProfileRecruiter/ProfileRecruiter";

// Import Components
import Navbar from "./components/Navbar/Navbar";
import UploadImage from "./components/UploadImage/UploadImage";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/" exact component={Home} />
          <Route path="/jobbridge/landing-page" exact component={LandingPage} />
          <Route
            path="/jobbridge/profile-worker"
            exact
            component={ProfileWorker}
          />
          <Route path="/jobbridge/edit-worker" exact component={EditWorker} />
          <Route path="/jobbridge/chat" exact component={Chat} />
          <Route
            path="/jobbridge/edit-recruiter"
            exact
            component={EditRecruiter}
          />
          <Route
            path="/jobbridge/profile-recruiter"
            exact
            component={ProfileRecruiter}
          />

          {/* Route cek Components */}
          <Route path="/jobbridge/navbar" exact component={Navbar} />
          <Route path="/jobbridge/upload-image" exact component={UploadImage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
