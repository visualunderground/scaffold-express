//  TODO: http://start.jcolemorrison.com/quick-tip-organizing-routes-in-large-express-4-x-apps/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express index page' });
});

/* GET home page. */
router.get('/test-route', function(req, res, next) {
  res.render('test-route', { title: 'Test: routes.js' });
});

module.exports = router;
