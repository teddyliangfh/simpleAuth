import { call, put, takeEvery, take, fork } from "redux-saga/effects";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
  REQUEST,
  LOGIN_SAGA,
} from "./const";
import LoginService from "../service/login";

// worker saga
function* loginHandle(action) {
  yield put({ type: REQUEST });
  try {
    const res1 = yield call(LoginService.login, action.payload);
    const res2 = yield call(LoginService.getMoreUserInfo, res1);
    yield put({ type: LOGIN_SUCCESS, payload: res2 });
  } catch (err) {
    yield put({ type: LOGIN_FAILURE, payload: err });
  }
}

// watcher saga
function* loginSaga() {
  yield takeEvery(LOGIN_SAGA, loginHandle);
  // while (true) {
  //   const action = yield take(LOGIN_SAGA);
  //   // call block
  //   // fork non-block
  //   // yield call(loginHandle, action);
  //   yield fork(loginHandle, action);
  //   console.log("action", action);
  // }
}

export default loginSaga;
