const initialState = {
  data: {},
  roleUser: 0,
  isLoading: false,
  isError: false,
  msg: "",
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_WORKER_PENDING":
      return {
        ...state,
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "REGISTER_WORKER_FULFILLED":
      return {
        ...state,
        roleUser: 0,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "REGISTER_WORKER_REJECTED":
      return {
        ...state,
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
