const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    ID: {type: String, maxLength: 10, required: true, unique: true },
    name: { type: String, maxLength: 100, required: true },
    content: { type: String},
    image: { type: String, maxLength: 200 },
    reviewer: { type: String, maxLength: 100},
}, {collection: 'review'});


module.exports = mongoose.model('review', reviewSchema);