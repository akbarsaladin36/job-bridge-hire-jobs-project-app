import axiosApiIntances from "../../utils/axios";

export const updateRecruiter = (id, data) => {
  return {
    type: "UPDATE_RECRUITER",
    payload: axiosApiIntances.patch(`recruiter/update/${id}`, data),
  };
};

export const hireWorker = (data) => {
  return {
    type: "HIRE_WORKER",
    payload: axiosApiIntances.post(`recruiter/hire`, data),
  };
};
