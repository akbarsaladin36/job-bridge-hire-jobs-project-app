import { combineReducers } from "redux";
import auth from "./auth";
import recruiter from "./recruiter";

export default combineReducers({
  auth,
  recruiter,
});
