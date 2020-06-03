const Mood = require('../models/moodModel');

module.exports = {
    newMood
    // index,
    // createMood,
}

// function createMood(req, res) {
//     req.body.user = req.user
//     req.body.moods  = req.body.moods.map(function(mood) {
//         return{
//             mood: mood
//         }
//     })
//     const mood = new Mood(req.body);
//     mood.save(function(err, newMood) {
//     res.redirect('/entries/index');
//   });
// }

// function index(req, res) {
//     Mood.find({user: req.user}, function(err, moods) {
//       res.render('entries/index', { title: 'New Mood', moods });
//     });
//   }

function newMood(req, res) {
    res.render('moods/new');
}