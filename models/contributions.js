const mongoose = require('mongoose')

const contributionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    course: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    filename: {
        type: String,
        required: true,
    },
    pdf: {
        type: String,
        required: true,
    },
    cloudinaryId: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Contributions', contributionSchema)