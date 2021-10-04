import { combineReducers } from "redux";

import { LoginReducer } from "../../Screen/Login/Redux/Reducer";
import { RegisterReducer } from "../../Screen/Register/Redux/Reducer";
import { HomeReducer } from "../Homepage/Redux/Reducer";

export const allReducers = combineReducers({
  RegisterReducer,
  LoginReducer,
  HomeReducer,
});
