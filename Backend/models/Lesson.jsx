const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    title: { type: String, required: true },
    videoUrl: { type: String },
    content: String,
    order: Number
});

module.exports = mongoose.model('Lesson', lessonSchema);