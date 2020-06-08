const Entry = require('../models/entry');
const Mood = require('../models/addMood');

module.exports = {
  newEntry,
  index,
  createEntry,
  homePage,
  editForm,
  deleteEntry,
  updateEntry
}

function createEntry(req, res) {
  req.body.user = req.user
  console.log(req.body.sleep)
  if (typeof req.body.moods !== 'string') {
    req.body.moods = req.body.moods.map(function (mood) {
      return {
        mood: mood
      }
    })
  }
  const entry = new Entry(req.body);
  entry.note = req.body.note
  entry.sleep = req.body.sleep
  entry.save(function (err, newEntry) {
    res.redirect('/entries/index');
  });
}

function deleteEntry(req, res) {
  Entry.findByIdAndRemove(req.params.id, function (err, deleteConfirmation) {
    res.redirect('/entries/index');
  })
}

function index(req, res) {
  Mood.find({ user: req.user }, function (err, mood) {
    // console.log(mood, "HEEEEERRREEEE")
  });
  console.log(req.body.mood);
  Entry.find({ user: req.user }, function (err, entries) {
    res.render('entries/index', {
      title: 'All Entries',
      entries
    });
  });
}

function newEntry(req, res) {
  Mood.find({ user: req.user }, function (err, moods) {
    res.render('entries/new', {
      title: 'New Entry',
      customMoods: moods
    })
  })
}

function editForm(req, res) {
  Entry.findById(req.params.id, function (err, note) {
    res.redirect('/entries/edit', {
      title: 'Edit Entry',
      note: note,
    })
  })
}

function editForm(req, res) {
  Entry.findById(req.params.id, function(err, entryToEditDB) {
          res.render('entries/edit', {
              title: 'Edit Entry',
              entry: entryToEditDB,
            
          })
      })
  }

function updateEntry(req, res) {
  Entry.findByIdAndUpdate(req.params.id, req.body, {new: true}, function(err, updatedEntryDb) {
      res.redirect('/entries/index');
  })
}

function homePage(req, res) {
  res.render('homepage')
}