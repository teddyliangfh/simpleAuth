import LoginService from "../service/login";
import { LOGIN_SUCCESS, LOGIN_SAGA } from "./const";
import co from "co";

// export const login = (userInfo) => ({type: LOGIN_SUCCESS, payload: userInfo});

// * 1. use thunk
// export const login = (userInfo) => (dispatch) => {
//   dispatch({type: "REQUEST"});
//   LoginService.login(userInfo).then(
//     (res) => {
//       // dispatch({type: "LOGIN_SUCCESS", payload: res});
//       getMoreUserInfo(dispatch, res);
//     },
//     (err) => {
//       dispatch({type: "LOGIN_FAILURE", payload: err});
//     }
//   );
// };

// export const getMoreUserInfo = (dispatch, userInfo) => {
//   LoginService.getMoreUserInfo(userInfo).then(
//     (res) => {
//       dispatch({type: "LOGIN_SUCCESS", payload: res});
//     },
//     (err) => {
//       dispatch({type: "LOGIN_FAILURE", payload: err});
//     }
//   );
// };

// export const loginPromise = (dispatch, userInfo) => {
//   return LoginService.login(userInfo).then(
//     (res) => {
//       // dispatch({type: "LOGIN_SUCCESS", payload: res});
//       return res;
//     },
//     (err) => {
//       dispatch({type: "LOGIN_FAILURE", payload: err});
//     }
//   );
// };

// * 2：async await
// export function login(userInfo) {
//   return async function(dispatch) {
//     dispatch({type: "REQUEST"});
//     let res1 = await loginPromise(dispatch, userInfo);
//     console.log("rrrr", res1); //sy-log
//     if (res1) {
//       getMoreUserInfo(dispatch, res1);
//     }
//   };
// }

// export function login(userInfo) {
//   return function(dispatch) {
//     return co(function*() {
//       dispatch({type: "REQUEST"});
//       // 请求1： 用户登录
//       let res1 = yield loginPromise(dispatch, userInfo);
//       console.log("rrrr", res1); //sy-log
//       // 请求2： 根据用户基本信息获取详细信息
//       if (res1) {
//         getMoreUserInfo(dispatch, res1);
//       }
//     });
//   };
// }

// *3：  redux-saga action
export const login = (userInfo) => ({ type: LOGIN_SAGA, payload: userInfo });
