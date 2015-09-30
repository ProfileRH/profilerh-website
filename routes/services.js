var express = require('express');
var router = express.Router();

//var appDir = path.dirname(require.main.filename); ==> /bin pas /public

/* GET services page */
router.get('/', function(req, res, next) {
    res.sendFile(publicFolder + '/services.html');
});

module.exports = router;
