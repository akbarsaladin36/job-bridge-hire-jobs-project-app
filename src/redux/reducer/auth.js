const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_RECRUITER_PENDING": // prosesnya sedang berjalan
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "LOGIN_RECRUITER_FULFILLED": // ketika sukses
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "LOGIN_RECRUITER_REJECTED": // ketika gagal
      return {
        ...state,
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
    default:
      return state;
  }
};

export default auth;
