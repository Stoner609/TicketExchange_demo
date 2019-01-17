const express = require("express");
const router = express.Router();

const UserController = require("../controller/user_controller");
const UserMiddleware = require("../middleware/user_middleware");

/* GET 讀取會員資料 */
router.get(
  "/user",
  UserMiddleware.verfiyTokenAndUser,
  UserController.userProfile
);

/* GET token 解析 (平時應該用不到) */
router.get("/user/token", UserController.verfiyToken);

/* POST 新增會員資料 */
router.post(
  "/user/singup",
  UserMiddleware.verfiyAccount,
  UserController.singup
);

/* POST 更新會員資料 */
router.post(
  "/user/update",
  UserMiddleware.verfiyTokenAndUser,
  UserController.updateUser
);

/* POST 會員登入 */
router.post("/login", UserController.login);

module.exports = router;
