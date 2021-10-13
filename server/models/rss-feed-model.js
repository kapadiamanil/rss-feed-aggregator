import { Schema, model } from "mongoose";

let RssFeed = new Schema(
  {
    url: { type: String },
    name: { type: String },
  },
  { timestamps: true }
);

module.exports = model("feeds", RssFeed);
