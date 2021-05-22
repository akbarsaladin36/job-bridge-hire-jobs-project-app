import axiosApiIntances from "../../utils/axios";

export const registerWorker = (data) => {
  return {
    type: "REGISTER_WORKER",
    payload: axiosApiIntances.post("auth/register-worker", data),
  };
};
