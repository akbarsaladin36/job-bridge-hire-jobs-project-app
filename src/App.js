import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../src/redux/store";
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
        </PersistGate>
      </Provider>
    );
  }
}

export default App;
