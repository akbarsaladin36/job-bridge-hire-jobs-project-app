const initialState = {
  data: {},
  login: false, // false : tampilan navbar sebelum login || true: tampilan navbar setalah login
  roleUser: 0, // 0 = worker || 1 = recruiter
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_RECRUITER_PENDING": // prosesnya sedang berjalan
      return {
        ...state,
        login: false,
        roleUser: 1,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "REGISTER_RECRUITER_FULFILLED": // ketika sukses
      return {
        ...state,
        login: true,
        roleUser: 1,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "REGISTER_RECRUITER_REJECTED": // ketika gagal
      return {
        ...state,
        login: false,
        roleUser: 1,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "LOGIN_RECRUITER_PENDING": // prosesnya sedang berjalan
      return {
        ...state,
        login: false,
        roleUser: 1,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "LOGIN_RECRUITER_FULFILLED": // ketika sukses
      return {
        ...state,
        login: true,
        roleUser: 1,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "LOGIN_RECRUITER_REJECTED": // ketika gagal
      return {
        ...state,
        login: false,
        roleUser: 1,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {},
        msg: "Succes Logout !",
      };
    case "LOGIN_WORKER_PENDING": // prosesnya sedang berjalan
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "LOGIN_WORKER_FULFILLED": // ketika sukses
      return {
        ...state,
        login: true,
        roleUser: 0,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "LOGIN_WORKER_REJECTED": // ketika gagal
      return {
        ...state,
        login: false,
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default auth;
