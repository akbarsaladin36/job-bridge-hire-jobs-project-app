import axiosApiIntances from "../../utils/axios";

export const getDataWorker = (id) => {
  return {
    type: "GET_WORKER",
    payload: axiosApiIntances.get(`worker/${id}`),
  };
};

export const UpdateBiodataWorker = (id, formData) => {
  return {
    type: "UPDATE_BIODATA_WORKER",
    payload: axiosApiIntances.patch(`worker/biodata/${id}`, formData),
  };
};

export const UpdateImageWorker = (id, formData) => {
  return {
    type: "UPDATE_IMAGE_WORKER",
    payload: axiosApiIntances.patch(`worker/biodata/${id}`, formData),
  };
};

export const UpdateSkillWorker = (id, form) => {
  return {
    type: "UPDATE_SKILL_WORKER",
    payload: axiosApiIntances.patch(`worker/skills/${id}`, form),
  };
};

export const CreateExperienceWorker = (id, formData) => {
  return {
    type: "CREATE_EXPERIENCE_WORKER",
    payload: axiosApiIntances.post(`worker/experience/${id}`, formData),
  };
};

export const CreatePortofolioWorker = (id, formData) => {
  return {
    type: "CREATE_PORTOFOLIO_WORKER",
    payload: axiosApiIntances.post(`worker/portofolio/${id}`, formData),
  };
};
