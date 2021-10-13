import RssFeed from "../models/rss-feed-model";

import { ErrorHandler } from "../middleware/error";

import { ERROR_MESSAGE } from "../ErrorMessages";

export const createRssFeed = async (req, res, next) => {
  try {
    const { body } = req;

    const rssFeed = new RssFeed({
      ...body,
    });

    const newRssFeed = await rssFeed.save();

    return res.status(200).json({
      success: true,
      id: newRssFeed._id,
    });
  } catch (error) {
    next(error);
  }
};

export const updateRssFeed = async (req, res, next) => {
  try {
    const body = req.body;

    if (!Object.entries(body).length) {
      //checking for empty object
      throw new ErrorHandler(404, ERROR_MESSAGE.PROVIDE_BODY_TO_UPDATE);
    }

    const rssFeed = await RssFeed.findOne({ _id: req.params.id });

    console.log({ RssFeed });

    // for (const key in modelSchema.obj) {
    //   rssFeed[key] = body[key];
    // }

    const updatedRssFeed = await rssFeed.save();

    return res.status(200).json({
      success: true,
      id: updatedRssFeed._id,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteRssFeed = async (req, res, next) => {
  try {
    const rssFeed = await RssFeed.findOne({ _id: req.params.id });

    await rssFeed.remove();

    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

export const getRssFeedById = async (req, res, next) => {
  try {
    const singleRssFeed = await RssFeed.findOne({ _id: req.params.id });

    return res.status(200).json({
      success: true,
      data: singleRssFeed,
    });
  } catch (error) {
    next(error);
  }
};

export const getRssFeeds = async (req, res, next) => {
  try {
    const allRssFeeds = await RssFeed.find({});
    return res.status(200).json({
      success: true,
      data: allRssFeeds || [],
    });
  } catch (error) {
    next(error);
  }
};
