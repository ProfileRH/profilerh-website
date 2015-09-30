var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' }); //ex avec rendu Jade par défaut
  res.sendFile(publicFolder + '/index.html');

});

module.exports = router;
