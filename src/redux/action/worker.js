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

export const deleteExperienceWorker = (id) => {
  return {
    type: "DELETE_EXPERIENCE_WORKER",
    payload: axiosApiIntances.delete(`worker/experience/${id}`),
  };
};

export const CreatePortofolioWorker = (id, formData) => {
  return {
    type: "CREATE_PORTOFOLIO_WORKER",
    payload: axiosApiIntances.post(`worker/portofolio/${id}`, formData),
  };
};

export const getPortofolioId = (id) => {
  return {
    type: "GET_PORTOFOLIO_ID",
    payload: axiosApiIntances.get(`worker/portofolio/${id}`),
  };
};

export const UpdatePortofolioId = (id, formData) => {
  return {
    type: "UPDATE_PORTOFOLIO_ID",
    payload: axiosApiIntances.patch(`worker/portofolio/${id}`, formData),
  };
};

export const deletePortofolio = (id) => {
  return {
    type: "DELETE_PORTOFOLIO",
    payload: axiosApiIntances.delete(`worker/portofolio/${id}`),
  };
};
