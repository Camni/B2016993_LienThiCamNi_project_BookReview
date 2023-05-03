const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: { type: String, maxLength: 16, required: true, unique: true },
    password: { type: String, maxLength: 16, required: true },
    name: { type: String, maxLength: 100, required: true },
}, { collection: 'admin' });


module.exports = mongoose.model('admin', adminSchema);