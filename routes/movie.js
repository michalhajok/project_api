const express = require('express')

const router = express.Router()

const Movie = require('../models/Movie')

router.get('/', async (req, res) => {
    try {
        const movies = await Movie.find()
        res.json(movies)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req,res) => {
    try {
        const { title, description, video_url } = req.body

        const movie = new Movie({
            title: title,
            description: description,
            video_url: video_url
        })

        const savedMovie = movie.save()
        res.json(savedMovie)

    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
