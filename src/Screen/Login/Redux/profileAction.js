import axios from "axios";
import { ToastAndroid } from "react-native";
import { put, takeLatest } from "redux-saga/effects";
import { navigate } from "../../../../src/Function/Nav";
import { LOGIN } from "../../Login/Redux/Action";
import { setDataLogin } from "../../Login/Redux/AuthAction";

function* login(action) {
  try {
    const res = yield axios.post(
      "https://movieapp-glints.herokuapp.com/api/v1/users/signin",
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
