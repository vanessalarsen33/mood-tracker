const mongoose = require('mongoose');
//short cut variable 
const Schema = mongoose.Schema; 

const newMoodSchema = new mongoose.Schema({
     mood: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Mood', newMoodSchema);