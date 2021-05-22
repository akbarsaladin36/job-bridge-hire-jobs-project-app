import axiosApiIntances from "../../utils/axios";

export const getDataWorker = (id) => {
  return {
    type: "GET_WORKER",
    payload: axiosApiIntances.get(`worker/${id}`),
  };
};
