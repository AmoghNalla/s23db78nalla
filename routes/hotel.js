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
/* GET detail hotel page */
router.get('/detail', hotel_controlers.hotel_view_one_Page);
/* GET create hotel page */
router.get('/create', hotel_controlers.hotel_create_Page);
/* GET create update page */
router.get('/update', hotel_controlers.hotel_update_Page);
/* GET delete hotel page */
router.get('/delete', hotel_controlers.hotel_delete_Page);

module.exports = router;