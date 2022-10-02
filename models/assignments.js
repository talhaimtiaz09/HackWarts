const mongoose = require('mongoose')

const assignmentSchema = new mongoose.Schema({
    fileName: {
        type: String,
        required: true,
    },
    fileLink: {
        type: String,
        required: true,
    },
    courseID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Courses",
    },
    user: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Assignments', assignmentSchema)