const Entry = require('../models/entry');

module.exports = {
    newEntry,
    index,
    createEntry,
    homePage
}

function createEntry(req, res) {
    req.body.user = req.user
    req.body.moods  = req.body.moods.map(function(mood) {
        return{
            mood: mood
        }
    })
    const entry = new Entry(req.body);
    entry.note = req.body.note
    console.log(req.body)
    entry.save(function(err, newEntry) {
    res.redirect('/entries/index');
  });
}

function index(req, res) {
    Entry.find({user: req.user}, function(err, entries) {
      res.render('entries/index', { title: 'All Entries', entries });
    });
  }

function newEntry(req, res) {
    res.render('entries/new');
}

function homePage(req, res) {
    res.render('homepage')
}