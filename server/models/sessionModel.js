const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    cookieID: { type: String,  required: true, unique: true},
    createdAt: { type: Date, expires: 300, default: Date.now},
});

const Session = mongoose.model('Session', sessionSchema);
module.exports = Session;