var express = require('express');
var router = express.Router();

console.log(996);

/* GET home page. */
router.get('/', function(req, res, next) {

  console.log("index routes success");

  // res.send(req.params);
  console.log(req.query);
  res.end(JSON.stringify(req.query));


});

module.exports = router;