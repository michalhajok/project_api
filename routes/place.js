const express = require('express')

const router = express.Router()

const Place = require('../models/Place')

router.get('/', async (req, res) => {
    try {
        const places = await Place.find()
        res.json(places)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req,res) => {
    try {
        const { title, description, foto_url, price, city, address, category } = req.body

        const place = new Place({
            title: title,
            description: description,
            foto_url: foto_url,
            price: price,
            city: city,
            address: address,
            category: category
        })

        const savedPlace = place.save()
        res.json(savedPlace)

    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
