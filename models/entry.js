const mongoose = require('mongoose');
//short cut variable 
const Schema = mongoose.Schema; 

const moodSchema = new mongoose.Schema({
    mood: String,
}, {
    timestamps: true
});

const entrySchema = new Schema({
    moods:[moodSchema],
    customMoods: [{
        type: Schema.Types.ObjectId,
        ref: 'Mood'
    }],
    note: String,
    sleep: Number,
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Entry', entrySchema);
