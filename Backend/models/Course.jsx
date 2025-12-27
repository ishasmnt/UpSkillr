const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: String,
    price: { type: Number, default: 0 },
    thumbnail: String,
    instructorId: { type: String, required: true }, // Firebase UID
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);