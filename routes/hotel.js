var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('hotel', { title: 'Search Results Hotel' });
});

module.exports = router;
var express=require('express');
const hotel_controlers= require('../controllers/hotel');
var router = express.Router();
router.get('/', hotel_controlers.hotel_view_all_Page );
module.exports = router;