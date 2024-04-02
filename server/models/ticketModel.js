const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
    title: { type: String,  required: true},
    createdAt: { type: Date, default: Date.now},
    createdBy: { type: String,  required: true},
    tags: [String],
    comments: [String],
    status: { type: String, required: true, default: "new"}
});

const Ticket = mongoose.model('Ticket', ticketSchema);
module.exports = Ticket;
