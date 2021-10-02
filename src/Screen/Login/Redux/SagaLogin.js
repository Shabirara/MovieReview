import axios from "axios";
import { ToastAndroid } from "react-native";
import { put, takeLatest } from "redux-saga/effects";
import { navigate } from "../../../Function/Nav";
import { LOGIN } from "../../../Screen/Login/Redux/Action";
import { setDataLogin } from "../action/authAction";

function* login(action) {
  try {
    const res = yield axios.post(
      "https://movieapp-team-b-2021.herokuapp.com/api/rMovie/login",
      action.payload
    );

    if (res.status === 200) {
      yield put(setDataLogin(res.data));
      yield ToastAndroid.showWithGravity(
        res.data.message,
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM
      );
      yield navigate("MainScreen");
    } else {
      console.log(res.data.statusCode);
    }
  } catch (error) {
    console.log(error);
  }
}

export function* SagaLogin() {
  yield takeLatest(LOGIN, login);
}
