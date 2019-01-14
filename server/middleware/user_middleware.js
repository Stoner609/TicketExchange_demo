const UserService = require("../service/user_service");
const returnClass = require("../rule/returnClass");

module.exports = {
  /* token 解析、會員檢查是否存在 */
  verfiyTokenAndUser: async (req, res, next) => {
    let lo_returnClass = new returnClass();
    try {
      let token =
        req.cookies.athenaToken ||
        req.query.token ||
        req.headers["x-access-token"];

      const tokenData = await UserService.verfiyTokenHandler(token);
      if (tokenData) {
        next();
      }
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
      res.json(lo_returnClass);
    }
  }
};
