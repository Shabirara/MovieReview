import { all } from "redux-saga/effects";
import { SagaLogin } from "../Screen/LoginScreen/Redux/saga/SagaLogin";
import { SagaRegister } from "../Screen/RegisterScreen/Redux/SagaRegister";

export function* AllSaga() {
  yield all([SagaRegister(), SagaLogin()]);
}
