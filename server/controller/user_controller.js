const UserService = require("../service/user_service");
const returnClass = require("../rule/returnClass");

module.exports = {
  /* 撈會員資料 */
  // 依照 request 的 cookies 或者 localSession other 來抓會員資料
  userProfile: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "會員資料";
    try {
      const lo_result = await UserService.getUserData(req.cookies.athenaToken);
      console.log(lo_result);
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

    res.json(lo_returnClass);
  },

  /* 會員登入 */
  login: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "會員登入";
    try {
      const lo_result = await UserService.login(req.body);

      lo_returnClass = {
        ...lo_returnClass,
        message: "Enjoy your token",
        token: lo_result
      };
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.json(lo_returnClass);
  },

  /* 新增會員資料 */
  insertUser: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "新增會員資料";
    try {
      const lo_result = await UserService.insertUserData(req.body);
      lo_returnClass = {
        ...lo_returnClass,
        message: "User is Successfully Inserted"
      };
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.json(lo_returnClass);
  }
};
