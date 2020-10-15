const express = require("express");

const router = express.Router();

const Event = require("../models/Event");

router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/", async (req, res) => {
  try {
    const {
      title,
      description,
      cover_url,
      price,
      city,
      address,
      category,
      date,
      hour,
    } = req.body;

    const event = new Event({
      title: title,
      description: description,
      cover_url: cover_url,
      price: price,
      city: city,
      address: address,
      category: category,
      date: date,
      hour: hour,
    });

    const savedEvent = event.save();
    res.json(savedEvent);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/", async (req, res) => {
  const {
    _id,
    title,
    description,
    cover_url,
    price,
    city,
    address,
    category,
    date,
    hour,
  } = req.body;

  try {
    const event = Event.findByIdAndUpdate(
      { _id: _id },
      {
        title: title,
        description: description,
        cover_url: cover_url,
        price: price,
        city: city,
        address: address,
        category: category,
        date: date,
        hour: hour,
      }
    );
    res.send(event);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
