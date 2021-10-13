import { Router } from "express";

const rssFeedRouter = require("./rss-feed-router");

const router = Router();

// To call the music router
router.use("/rss-feed", rssFeedRouter);

module.exports = router;
