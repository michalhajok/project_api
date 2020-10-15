const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const placeRouter = require("./routes/place");
const movieRouter = require("./routes/movie");
const eventRouter = require("./routes/event");

dotenv.config();

const app = express();

mongoose
  .connect(process.env.DB_CONNECT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB Connected!"))
  .catch((err) => {
    console.log(`DB Connection Error: ${err.message}`);
  });

app.use(bodyParser.json());

app.use("/places", placeRouter);
app.use("/movies", movieRouter);
app.use("/events", eventRouter);

app.get("/", (req, res) => {
  res.json("Hello world !!!");
});

app.listen(process.env.PORT || 8080);
