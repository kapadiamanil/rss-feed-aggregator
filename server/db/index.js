import { connect, connection } from "mongoose";

const options = {
  user: "",
  pass: "",
  useNewUrlParser: true,
};

connect("mongodb://localhost:27017/rss-feed", options).catch((e) => {
  console.error("Connection error", e.message);
});

// it will console all the queries fired, we can use these queries in mongo shell with explain() to check whether it contains index or not(for our use)
// set("debug", true);

const db = connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function () {
  console.log("MongoDB database connection established successfully");
});

module.exports = db;
