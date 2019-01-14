const jwt = require("jsonwebtoken");
const User = require("../model/user_model");
require("dotenv").config();

module.exports = {
  getUserData: userObject => {
    return new Promise((resolve, reject) => {
      // let ver = jwt.verify(token, process.env.SECRET);
    });
  },

  /* 會員登入 */
  login: userObject => {
    return new Promise(async (resolve, reject) => {
      const { account, password } = userObject;
      const user = new User();

      User.findOne(
        {
          account,
          password
        },
        (err, data) => {
          if (err) reject(new Error(err));
          if (data === null) {
            resolve({
              success: false,
              message: "Authenticate failed. User not found",
              token: null
            });
          } else {
            const { account, firstname, lastname } = data;
            let token = jwt.sign(
              {
                account,
                firstname,
                lastname
              },
              process.env.SECRET
            );
            let returnClass = {
              success: true,
              message: "Enjoy your token",
              token
            };

            resolve(returnClass);
          }
        }
      );
    });
  },

  /* 新增會員資料 */
  insertUserData: userObject => {
    return new Promise((resolve, reject) => {
      const user = new User(userObject);
      user.save((err, data) => {
        if (err) reject(err);
        resolve(data);
      });
    });
  }
};
