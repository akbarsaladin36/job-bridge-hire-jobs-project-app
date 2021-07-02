import axiosApiIntances from "../../utils/axios";

export const registerRecruiter = (data) => {
  return {
    type: "REGISTER_RECRUITER",
    payload: axiosApiIntances.post("auth/register-company", data),
  };
};

export const loginRecruiter = (data) => {
  return {
    type: "LOGIN_RECRUITER",
    payload: axiosApiIntances.post("auth/login-company", data),
  };
};

export const getRecruiterById = (id) => {
  return {
    type: "GET_RECRUITER",
    payload: axiosApiIntances.get(`recruiter/${id}`),
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

export const RequestReset = (data) => {
  return {
    type: "REQUEST_RESET",
    payload: axiosApiIntances.patch("auth/request-otp", data)
  }
}

export const ResetPassword = (data) => {
  return {
    type: "RESET_PASSWORD",
    payload: axiosApiIntances.patch("auth/reset-password", data)
  }
}