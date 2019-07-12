const express = require('express');
const path = require('path');
const router = express.Router();

const IndexController = require('../controller/index_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.sendFile(path.join(path.resolve('../'), 'build', 'index.html'));
});

module.exports = router;