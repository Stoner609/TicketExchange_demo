const mongoose = require("mongoose");
const crypto = require("crypto");

const userSchema = new mongoose.Schema(
  {
    account: {
      type: String,
      required: [true, "帳號不可為空白"]
    },
    password: {
      type: String,
      set: v => userSchema.methods.cryptPwd("md5", v),
      required: [true, "密碼不可為空白"]
    },
    firstname: {
      type: String,
      required: [true, "姓氏不可為空白"]
    },
    lastname: {
      type: String,
      required: [true, "名字不可為空白"]
    },
    birthday: {
      type: Date
    },
    tel: {
      type: Array
    },
    mobile: {
      type: String
    },
    email: {
      type: String,
      required: [true, "信箱不可為空白"]
    },
    address: {
      type: String,
      required: [true, "地址不可為空白"]
    }
  },
  {
    collection: "users"
  }
);

/**
 * 會員密碼加密
 * @param hash      : 加密種類
 * @param password  : 會員密碼
 * @returns {PromiseLike<ArrayBuffer>}
 */
userSchema.methods.cryptPwd = (hash, password) => {
  let ls_md5 = crypto.createHash(hash);
  return ls_md5.update(password).digest("hex");
};

module.exports = mongoose.model("users", userSchema);
