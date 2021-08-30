// simulate login service
const LoginService = {
  login(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.name === "ted") {
          resolve({ id: 123, name: "welcome Ted!" });
        } else {
          reject({ err: { msg: "wrong password or account" } });
        }
      }, 1000);
    });
  },

  getMoreUserInfo(userInfo) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (userInfo.id === 123) {
          resolve({ ...userInfo, score: "100" });
        } else {
          reject({ msg: "get more detials" });
        }
      }, 1000);
    });
  },
};
export default LoginService;
