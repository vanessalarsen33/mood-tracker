const Entry = require('../models/entry');
const Mood = require('../models/addMood');

module.exports = {
    newEntry,
    index,
    createEntry,
    homePage
}

function createEntry(req, res) {
    req.body.user = req.user
    if (typeof req.body.moods !== 'string' ) {
      req.body.moods  = req.body.moods.map(function(mood) {
        return{
          mood: mood
        }
      })
    }
    const entry = new Entry(req.body);
    entry.note = req.body.note
    entry.save(function(err, newEntry) {
    res.redirect('/entries/index');
  });
}

function index(req, res) {
    Entry.find({user: req.user}, function(err, entries) {
      res.render('entries/index', { 
        title: 'All Entries', 
        entries });
    });
  }

function newEntry(req, res) {
  Mood.find({user: req.user}, function(err, moods) {

    res.render('entries/new', {
      title: 'New Entry',
      customMoods: moods
    })
  })
}

function homePage(req, res) {
    res.render('homepage')
}