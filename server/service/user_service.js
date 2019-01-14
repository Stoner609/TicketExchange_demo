const jwt = require("jsonwebtoken");
const User = require("../model/user_model");
require("dotenv").config();

module.exports = {
  getUserData: userToken => {
    return new Promise((resolve, reject) => {
      let ver = jwt.verify(userToken, process.env.SECRET);
      if (typeof ver !==  'object') {
        reject("Token is Expired");
      }
      resolve(ver);
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
            reject("Authenticate failed. User not found");
          } else {
            const { account, firstname, lastname } = data;
            let token = jwt.sign(
              {
                account,
                firstname,
                lastname
              },
              process.env.SECRET,
              { expiresIn: "1h" }
            );
            resolve(token);
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
        if (err) reject(new Error(err));
        resolve(data);
      });
    });
  }
};
