var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('rabbit', { title: 'Search Results rabbit' });
});
var express = require('express');
const rabbit_controlers= require('../controllers/rabbit');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
  return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
  }
/* GET rabbits */
router.get('/', rabbit_controlers.rabbit_view_all_Page );
router.get('/detail', secured, rabbit_controlers.rabbit_view_one_Page);
router.get('/create', secured, rabbit_controlers.rabbit_create_Page);
router.get('/update', secured, rabbit_controlers.rabbit_update_Page);
router.get('/delete', secured, rabbit_controlers.rabbit_delete_Page);
module.exports = router;