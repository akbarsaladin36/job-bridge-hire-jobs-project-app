import axiosApiIntances from "../../utils/axios";

export const loginRecruiter = (data) => {
  return {
    type: "LOGIN_RECRUITER",
    payload: axiosApiIntances.post("auth/login-company", data),
  };
};

export const logout = (data) => {
  return {
    type: "LOGOUT",
  };
};

export const loginWorker = (data) => {
  return {
    type: "LOGIN_WORKER",
    payload: axiosApiIntances.post("auth/login-worker", data),
  };
};

export const registerWorker = (data) => {
  return {
    type: "REGISTER_WORKER",
    payload: axiosApiIntances.post("auth/register-worker", data),
  };
};
