var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.sendFile(publicFolder + '/contact.html');
});

module.exports = router;
