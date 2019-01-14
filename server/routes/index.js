const express = require('express');
const router = express.Router();

const IndexController = require('../controller/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;