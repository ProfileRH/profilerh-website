var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.sendFile(publicFolder + '/about.html');
});

module.exports = router;
