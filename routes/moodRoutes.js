const express = require('express');
const router = express.Router();
const moodsCtrl = require('../controllers/moodController');

router.post('/', isLoggedIn, moodsCtrl.createMood);
// router.post('/index',isLoggedIn, moodsCtrl.createMood);


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;