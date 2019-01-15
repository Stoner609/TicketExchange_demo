const jwt = require("jsonwebtoken");
const User = require("../model/user_model");
require("dotenv").config();

module.exports = {
  /* token 解析 */
  verfiyTokenHandler: token => {
    return new Promise((resolve, reject) => {
      const ver = jwt.verify(token, process.env.SECRET);
      if (typeof ver !== "object") {
        reject("Token is Expired");
      }
      resolve(ver);
    });
  },

  /* 會員資料 */
  getUserHandler: userObject => {
    return new Promise((resolve, reject) => {
      const selectQuery = [
        "account",
        "firstname",
        "lastname",
        "birthday",
        "tel",
        "mobile",
        "email",
        "address"
      ];
      const { _id, account } = userObject;
      User.findOne(
        {
          _id,
          account
        },
        selectQuery.join(" "),
        (err, data) => {
          if (err) reject(new Error(err));
          if (data === null) {
            reject("Authenticate failed. User not found");
          }
          resolve(data);
        }
      );
    });
  },

  /* 會員登入 */
  loginHandler: userObject => {
    return new Promise(async (resolve, reject) => {
      const { account, password } = userObject;

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
            const { _id, account, firstname, lastname } = data;
            let token = jwt.sign(
              {
                _id,
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
  insertHandler: userObject => {
    return new Promise((resolve, reject) => {
      const user = new User(userObject);
      user.save((err, data) => {
        if (err) reject(new Error(err));
        resolve(true);
      });
    });
  },

  updateHandler: (id, userObject) => {
    return new Promise((resolve, reject) => {
      User.findOneAndUpdate({ _id: id }, userObject, (err, data) => {
        if (err) reject(new Error(err));
        resolve(true);
      });
    });
  }
};
