const mongoose = require('mongoose')

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    video_url: {
        type: String,
        required: true,
        unique: true
    },
})

module.exports = mongoose.model('Movie', movieSchema)
