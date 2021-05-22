import { combineReducers } from "redux";
import auth from "./auth";
import recruiter from "./recruiter";
import worker from "./worker";

export default combineReducers({
  auth,
  recruiter,
  worker,
});
