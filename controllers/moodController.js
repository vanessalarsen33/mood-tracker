const Mood = require('../models/addMood');

module.exports = {
    createMood
}

function createMood(req, res) {
    req.body.user = req.user
    Mood.create(req.body, function (err, newMood) {
        res.redirect('/entries/new')
    })
}