const express = require('express');
const router = express.Router();

const UserController = require('../controller/user_controller');

/* GET 讀取會員資料 */
router.get('/user', UserController.userProfile);

/* POST 會員登入 */
router.post('/user', UserController.login);

/* POST 新增會員資料 */
router.post('/user/insert', UserController.insertUser);

module.exports = router;
