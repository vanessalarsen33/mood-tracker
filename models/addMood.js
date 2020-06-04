const mongoose = require('mongoose');
//short cut variable 
const Schema = mongoose.Schema; 

const addMoodSchema = new mongoose.Schema({
     mood: String,
     user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Mood', addMoodSchema);