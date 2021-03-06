var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
  	title: 'Profile',
  	name: 'Ci SONG' 
  });
});

router.get('/profile', function(req, res, next){
	res.sendFile(path.join(__dirname, '../public/profile.html'));
});

router.get('/profile/html', function(req, res, next){
	res.sendFile(path.join(__dirname, '../public/cv/CV-english.htm'));
});

module.exports = router;
