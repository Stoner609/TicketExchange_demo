const jwt = require("jsonwebtoken");
const User = require("../model/user_model");
require("dotenv").config();

module.exports = {
  /* token 解析 */
  verfiyTokenHandler: token => {
    return new Promise((resolve, reject) => {
      const auth = jwt.verify(token, process.env.SECRET);
      if (typeof auth !== "object") {
        reject("Token is Expired");
      } else {
        resolve(auth);
      }
    });
  },

  /* 查詢帳號 */
  verifyAccount: account => {
    return new Promise((resolve, reject) => {
      User.findOne({ account }, (err, data) => {
        if (data == null) {
          resolve();
        } else {
          reject("帳號已存在");
        }
      });
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
          if (err) {
            reject(new Error("Authenticate failed. User not found"));
          } else {
            resolve(data);
          }
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
        if (err) {
          reject(new Error(err));
        } else {
          resolve();
        }
      });
    });
  },

  /* 修改會員資料 */
  updateHandler: (session, userObject) => {
    return new Promise((resolve, reject) => {
      const { _id, account } = session;
      User.findOneAndUpdate(
        { _id, account },
        {
          ...userObject,
          account
        },
        (err, data) => {
          if (err) {
            reject(new Error("not found"));
            return;
          }
          resolve(true);
        }
      );
    });
  }
};
