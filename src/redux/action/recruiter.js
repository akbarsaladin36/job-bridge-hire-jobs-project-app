import axiosApiIntances from "../../utils/axios";

export const updateRecruiter = (id, data) => {
  return {
    type: "UPDATE_RECRUITER",
    payload: axiosApiIntances.patch(`recruiter/update/${id}`, data),
  };
};
