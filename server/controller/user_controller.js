const UserService = require("../service/user_service");

module.exports = {
  /* 撈會員資料 */
  userProfile: async (req, res) => {
    // 依照 request 的 cookies 或者 localSession other 來抓會員資料
    try {
      // const lo_result = await UserService.getUserData();
      res.json({
        // data: lo_result,
        Description: "會員資料"
      });
    } catch (error) {
      res.json(error.message);
    }
  },

  /* 會員登入 */
  login: async (req, res) => {
    try {
      const lo_result = await UserService.login(req.body);
      res.json(lo_result);
    } catch (error) {
      res.json(error.message);
    }
  },

  /* 新增會員資料 */
  insertUser: async (req, res) => {
    try {
      const lo_result = await UserService.insertUserData(req.body);
      res.json(lo_result);
    } catch (error) {
      res.json(error.message);
    }
  }
};
