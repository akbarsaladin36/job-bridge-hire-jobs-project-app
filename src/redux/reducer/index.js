import { combineReducers } from "redux";
import auth from "./auth";
import worker from "./worker";

export default combineReducers({
  auth,
  worker,
});
