import { Router } from "express";
import {
  createRssFeed,
  updateRssFeed,
  deleteRssFeed,
  getRssFeedById,
  getRssFeeds,
} from "../controller/rss-feed-ctrl";

const router = Router();

router.post("/", createRssFeed);
router.put("/:id", updateRssFeed);
router.delete("/:id", deleteRssFeed);
router.get("/:id", getRssFeedById);
router.get("/", getRssFeeds);

module.exports = router;
