import { createStore, combineReducers, applyMiddleware } from "redux";
import { loginReducer } from "../reducer/loginReducer";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import loginSaga from "../action/loginSaga";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ user: loginReducer }),
  applyMiddleware(thunk, sagaMiddleware)
);

// redux-saga run generator
sagaMiddleware.run(loginSaga);

export default store;
