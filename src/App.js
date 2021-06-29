import React, { Component } from "react";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux/store";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Hire from "./pages/Hire/Hire";
import LandingPage from "./pages/LandingPage/LandingPage";
import ProfileWorker from "./pages/Worker/ProfileWorker/ProfileWorker";
import EditWorker from "./pages/Worker/EditWorker/EditWorker";
import Chat from "./pages/Chat/Chat";
import ProfileRecruiter from "./pages/Recruiter/ProfileRecruiter/ProfileRecruiter";
import EditRecruiter from "./pages/Recruiter/EditRecruiter/Profile";

// Import Components
import NavBar from "./components/Navbar/Navbar";
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
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Router>
            <Switch>
              {/* sesuaikan dengan codingan kemaren untuk route */}
              {/* <Route path="/profilepage" exact component={ProfilePage} /> */}

              <Route path="/jobbridge/navbar" exact component={NavBar} />
              <Route path="/jobbridge/hire/:id" exact component={Hire} />
              <Route path="/jobbridge" exact component={Home} />
              <Route path="/jobbridge/hire" exact component={Hire} />
              <Route path="/" exact component={LandingPage} />
              <Route
                path="/jobbridge/profile-worker"
                exact
                component={ProfileWorker}
              />
              <Route
                path="/jobbridge/edit-worker/"
                exact
                component={EditWorker}
              />
              <Route path="/jobbridge/chat" exact component={Chat} />

              <Route
                path="/jobbridge/profile-recruiter"
                exact
                component={ProfileRecruiter}
              />
              <Route
                path="/jobbridge/edit-recruiter"
                exact
                component={EditRecruiter}
              />

              {/* Route cek Components */}
              <Route path="/jobbridge/navbar" exact component={NavBar} />
              <Route
                path="/jobbridge/upload-image"
                exact
                component={UploadImage}
              />
              <Route path="/auth/worker/login" exact component={LoginPage} />
              <Route
                path="/auth/worker/register"
                exact
                component={RegisterPage}
              />
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
                path="/auth/worker/reset-password"
                exact
                component={ResetPasswordPage}
              />
              <Route
                path="/auth/recruiter/reset-password"
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
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
