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
