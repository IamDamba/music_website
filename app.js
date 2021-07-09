// ||||||||||||||||||||||||| Variables |||||||||||||||||||||||||||

const dotenv = require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

const Tracks = require("./back/models/Tracks");

const dbURI = process.env.DB_URI;
const port = process.env.PORT;

const db = undefined;

// ||||||||||||||||||||||||| MiddleWare |||||||||||||||||||||||||||

app.use(cors());

// ||||||||||||||||||||||||| Routes |||||||||||||||||||||||||||

app.get("/", (req, res) => {
  res.send("hello");
});

// ||||||||||||||||||||||||| Listen |||||||||||||||||||||||||||

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((res) => {
    app.listen(port || 3001, () => {
      console.log(`Listen to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

db = mongoose.connection;
db.once("open", async () => {
  if ((await Tracks.countDocuments().exec()) > 0) return;
  Promise.all([
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "Tampa",
      time: "2.56",
      bpm: "112",
      tag: "Cinqo P",
    }),
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "Laugh now, Cry Later",
      time: "2.56",
      bpm: "112",
      tag: "Drake",
    }),
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "What's Next",
      time: "2.56",
      bpm: "112",
      tag: "Drake",
    }),
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "The Bigger Picture",
      time: "2.56",
      bpm: "112",
      tag: "Lil Baby",
    }),
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "The Box",
      time: "2.56",
      bpm: "112",
      tag: "Roddy Ricch",
    }),
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "Martin & Gina",
      time: "2.56",
      bpm: "112",
      tag: "Polo G",
    }),
    Tracks.create({
      id: 1,
      image: "https://i.imgur.com/WPGSZli.jpg",
      title: "Goosebumps",
      time: "2.56",
      bpm: "112",
      tag: "Travis Scott",
    }),
  ])
    .then((res) => {
      console.log("Tracks Added");
    })
    .catch((err) => {
      console.log(err);
    });
});
