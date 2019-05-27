var express = require('express');
var router = express.Router();

var C_TEST_USER = {
	username: 'Anthony',
	passward: "960325"
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/**
 * 使用post请求验证用户信息
 */
router.get('/user', function(req, res) {
	var from = req.params[0];
	
	res.writeHead(200, {'ContentType': "text/plain"});
	res.end(from + "");
})

module.exports = router;
