const mongoose = require('mongoose')

const contributionSchema = new mongoose.Schema({
    course: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('Contributions', contributionSchema)