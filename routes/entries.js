const express = require('express');
const router = express.Router();
const entriesCtrl = require('../controllers/entries');

/* GET /entries/new listing. */
router.get('/', entriesCtrl.homePage);
router.get('/index', isLoggedIn, entriesCtrl.index);
router.get('/new', isLoggedIn, entriesCtrl.newEntry);
router.post('/index',isLoggedIn, entriesCtrl.createEntry);


function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;
