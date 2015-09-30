var express = require('express');
var router = express.Router();
var request = require('request');

var targetUrl = "http://localhost:4999/api/company/create";



/* GET inscription page. */
router.get('/', function(req, res, next) {
  res.sendFile(publicFolder + '/signup.html');
});

router.post('/', function(req, res) {
  request.post({
    url: targetUrl,
    method: "POST",
    json: req.body
  }, function(err, response, body) {
    if (!err) {
      console.log(response);
      console.log(body);
      res.json({"status": "OK", "message": "data correctly sent"});
    }
  });
});


module.exports = router;
