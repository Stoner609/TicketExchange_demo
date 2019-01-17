const UserService = require("../service/user_service");
const returnClass = require("../rule/returnClass");

module.exports = {
  /* token 解析 */
  verfiyToken: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "token";
    try {
      let token =
        req.cookies.athenaToken ||
        req.query.token ||
        req.headers["x-access-token"];

      const lo_result = await UserService.verfiyTokenHandler(token);

      lo_returnClass = {
        ...lo_returnClass,
        message: "Hello!",
        userProfile: {
          firstname: lo_result.firstname,
          lastname: lo_result.lastname
        }
      };
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.status(200).json(lo_returnClass);
  },

  /* 讀取會員資料 */
  userProfile: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "會員資料";
    try {
      // const header = req.headers["authorization"];
      let token =
        req.cookies.athenaToken ||
        req.query.token ||
        req.headers["x-access-token"];

      const tokenData = await UserService.verfiyTokenHandler(token);
      const userProfile = await UserService.getUserHandler(tokenData);

      lo_returnClass = {
        ...lo_returnClass,
        message: "UserProfileA",
        userProfile
      };
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }
    res.status(200).json(lo_returnClass);
  },

  /* 會員登入 */
  login: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "會員登入";
    try {
      const lo_result = await UserService.loginHandler(req.body);

      lo_returnClass = {
        ...lo_returnClass,
        message: "Enjoy your token",
        token: lo_result
      };
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.status(200).json(lo_returnClass);
  },

  /* 會員登出 */
  logout: (req, res) => {
    // todo...?
  },

  /* 新增會員資料 */
  singup: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "新增會員資料";
    try {
      const lo_result = await UserService.insertHandler(req.body);
      if (lo_result) {
        lo_returnClass = {
          ...lo_returnClass,
          message: "User is Successfully Inserted"
        };
      }
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.status(200).json(lo_returnClass);
  },

  /* 修改會員資料 */
  updateUser: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "修改會員資料";
    try {
      let session = req.session;
      let userData = req.body;
      const lo_result = await UserService.updateHandler(session, userData);
      if (lo_result) {
        lo_returnClass = {
          ...lo_returnClass,
          message: "User is Successfully Updated"
        };
      }
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.status(200).json(lo_returnClass);
  }

  /* 修改密碼 */
  /* 忘記密碼 */
};
