import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import EditRecruiter from "./pages/Recruiter/EditRecruiter/profile";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfileWorker from "./pages/Worker/ProfileWorker/ProfileWorker";
import EditWorker from "./pages/Worker/EditWorker/EditWorker";
import Chat from "./pages/Chat/Chat";
import ProfileRecruiter from "./pages/Recruiter/ProfileRecruiter/ProfileRecruiter";

// Import Components
import Navbar from "./components/Navbar/Navbar";
import UploadImage from "./components/UploadImage/UploadImage";
import LoginPage from "./pages/auth/worker/Login/Login";
import RegisterPage from "./pages/auth/worker/Register/Register";
import ResetPasswordPage from "./pages/auth/reset_password/ResetPassword/ResetPassword";
import ChangePasswordPage from "./pages/auth/reset_password/ChangePassword/ChangePassword";
import LoginAfterResetPasswordPage from "./pages/auth/reset_password/LoginAfterResetPassword/LoginAfterResetPassword";
import LoginRecruiterPage from "./pages/auth/recruiter/Login/Login_Recruiter";
import RegisterRecruiterPage from "./pages/auth/recruiter/Register/Register_Recruiter";
import SearchWorkerPage from "./pages/SearchWorker/Search_Worker";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* sesuaikan dengan codingan kemaren untuk route */}
          <Route path="/jobbridge" exact component={Home} />
          <Route path="/" exact component={LandingPage} />
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
          <Route path="/auth/worker/login" exact component={LoginPage} />
          <Route path="/auth/worker/register" exact component={RegisterPage} />
          <Route
            path="/auth/recruiter/login"
            exact
            component={LoginRecruiterPage}
          />
          <Route
            path="/auth/recruiter/register"
            exact
            component={RegisterRecruiterPage}
          />
          <Route
            path="/auth/reset-password"
            exact
            component={ResetPasswordPage}
          />
          <Route
            path="/auth/change-password"
            exact
            component={ChangePasswordPage}
          />
          <Route
            path="/auth/login-reset"
            exact
            component={LoginAfterResetPasswordPage}
          />
          <Route path="/search-worker" exact component={SearchWorkerPage} />
        </Switch>
      </Router>
    );
  }
}

export default App;
