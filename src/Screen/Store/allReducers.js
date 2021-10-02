import { combineReducers } from "redux";
import { allReducers } from "./allReducers";

import LoginReducer from "../../Screen/Login/Redux/Reducer";
import RegisterReducer from "../../Screen/Register/Redux/Reducer";

export const allReducers = combineReducers({
  Register: RegisterReducer,
  Login: LoginReducer,
});
