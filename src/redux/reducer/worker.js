const initialState = {
  data: {},
  biodata: {},
  skill: {},
  experience: {},
  portofolio: {},
  login: false, // false : tampilan navbar sebelum login || true: tampilan navbar setalah login
  roleUser: 0, // 0 = worker || 1 = recruiter
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "GET_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        biodata: action.payload.data.data[0],
        skill: action.payload.data.data[0].skill,
        experience: action.payload.data.data[0].experience,
        portofolio: action.payload.data.data[0].portofolio,
        msg: action.payload.data.msg,
      };
    case "GET_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data[0].msg,
        skill: action.payload.data.data[0].skill.msg,
        experience: action.payload.data.data[0].experience.msg,
        portofolio: action.payload.data.data[0].portofolio.msg,
      };

    case "UPDATE_BIODATA_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "UPDATE_BIODATA_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "UPDATE_BIODATA_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
      };

    case "UPDATE_IMAGE_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "UPDATE_IMAGE_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "UPDATE_IMAGE_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
      };

    case "UPDATE_SKILL_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "UPDATE_SKILL_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "UPDATE_SKILL_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
      };

    case "CREATE_EXPERIENCE_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "CREATE_EXPERIENCE_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        // data: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    case "CREATE_EXPERIENCE_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        // data: {},
        msg: action.payload.data.msg,
      };

    case "DELETE_EXPERIENCE_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "DELETE_EXPERIENCE_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        // data: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    case "DELETE_EXPERIENCE_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        // data: {},
        msg: action.payload.data.msg,
      };

    case "CREATE_PORTOFOLIO_WORKER_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "CREATE_PORTOFOLIO_WORKER_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        // data: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    case "CREATE_PORTOFOLIO_WORKER_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        // data: {},
        msg: action.payload.data.msg,
      };

    case "GET_PORTOFOLIO_ID_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "GET_PORTOFOLIO_ID_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        portofolioId: action.payload.data.data[0],
        msg: action.payload.data.msg,
      };
    case "GET_PORTOFOLIO_ID_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data[0].msg,
        portofolioId: action.payload.data.data[0].portofolio.msg,
      };
    case "UPDATE_PORTOFOLIO_ID_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "UPDATE_PORTOFOLIO_ID_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "UPDATE_PORTOFOLIO_ID_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
      };
    case "DELETE_PORTOFOLIO_PENDING":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "DELETE_PORTOFOLIO_FULFILLED":
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        msg: action.payload.data.msg,
      };
    case "DELETE_PORTOFOLIO_REJECTED":
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
      };
    default:
      return state;
  }
};

export default auth;
