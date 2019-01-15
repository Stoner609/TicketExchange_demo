const UserService = require("../service/user_service");
const returnClass = require("../rule/returnClass");

module.exports = {
  /* token 解析、會員檢查是否存在 */
  verfiyTokenAndUser: async (req, res, next) => {
    let lo_returnClass = new returnClass();
    try {
      const header = req.headers["authorization"];
      if (typeof header !== "undefined") {
        const bearer = header.split(" ");
        const token = bearer[1];
        req.token = token;

        const tokenData = await UserService.verfiyTokenHandler(token);
        req.session = {
          _id: tokenData._id
        }
        if (tokenData) {
          next();
        }
      }
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
      res.json(lo_returnClass);
    }
  }
};
