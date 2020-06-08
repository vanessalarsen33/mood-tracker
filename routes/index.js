const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  if (isLoggedIn === true) {
    res.redirect('entries/index')
  } else {
    res.render('homepage');
  }
});

function isLoggedIn(req, res) {
  if (req.isAuthenticated()) {
    return true
  }
}

module.exports = router;
