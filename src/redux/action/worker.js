import axiosApiIntances from "../../utils/axios";

export const getDataWorker = (id) => {
  return {
    type: "GET_WORKER",
    payload: axiosApiIntances.post(`auth/worker/ ${id}`),
  };
};
