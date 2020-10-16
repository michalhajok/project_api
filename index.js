const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");

const placeRouter = require("./routes/place");
const movieRouter = require("./routes/movie");
const eventRouter = require("./routes/event");

dotenv.config();

const app = express();

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.2lwyl.mongodb.net/${process.env.DB_NAME}`;
mongoose
  .connect(url, {
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

app.listen(8080 || process.env.PORT);
