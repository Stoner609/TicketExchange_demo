const express = require('express');
const router = express.Router();

const ProductController = require('../controller/product_controller');

/* GET 產品列表 */
router.get('/product', ProductController.productList);

module.exports = router;
