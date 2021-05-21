const initialState = {
  data: {},
  isLoading: false,
  isError: false,
  msg: "",
};

const recruiter = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_RECRUITER_PENDING":
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "UPDATE_RECRUITER_FULFILLED": // ketika sukses
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: action.payload.data.data,
        msg: action.payload.data.msg,
      };
    case "UPDATE_RECRUITER_REJECTED": // ketika gagal
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    default:
      return state;
  }
};

export default recruiter;
