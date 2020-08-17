const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const placeRouter = require('./routes/place')
const movieRouter = require('./routes/movie')

dotenv.config()

const app = express()

mongoose
    .connect(process.env.DB_CONNECT, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log(`DB Connection Error: ${err.message}`)
    })

app.use(bodyParser.json())

app.use('/place', placeRouter)
app.use('/movie', movieRouter)

app.get('/', (req,res) => {
    res.json('Hello world !!!')
})

app.listen(4000)
