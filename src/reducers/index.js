import { combineReducers } from "redux";
import {
  userLogin,
} from "./login.reducer";

const mainReducer = combineReducers({
  userLogin,
});

export default mainReducer;
