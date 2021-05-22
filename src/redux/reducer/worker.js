const initialState = {
  data: {},
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
    case "GET_WORKER_PENDING": // prosesnya sedang berjalan
      return {
        ...state,
        login: false, // false : tampilan navbar sebelum login || true: tampilan navbar setalah login
        roleUser: 0,
        isLoading: true,
        isError: false,
        msg: "",
      };
    case "GET_WORKER_FULFILLED": // ketika sukses
      return {
        ...state,
        login: true, // false : tampilan navbar sebelum login || true: tampilan navbar setalah login
        roleUser: 0,
        isLoading: false,
        isError: false,
        data: action.payload.data.data[0],
        skill: action.payload.data.data[0].skill,
        experience: action.payload.data.data[0].experience,
        portofolio: action.payload.data.data[0].portofolio,
        msg: action.payload.data.msg,
      };
    case "GET_WORKER_REJECTED": // ketika gagal
      return {
        ...state,
        login: false, // false : tampilan navbar sebelum login || true: tampilan navbar setalah login
        roleUser: 0,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data[0].msg,
        skill: action.payload.data.data[0].skill.msg,
        experience: action.payload.data.data[0].experience.msg,
        portofolio: action.payload.data.data[0].portofolio.msg,
      };

    default:
      return state;
  }
};

export default auth;
