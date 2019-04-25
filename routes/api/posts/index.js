const express = require("express");
const router = express.Router();

const PostModel = require("../../../model/Post");

/**
 * @route GET /api/posts/
 * @desc: Get all the posts
 * @access Public
 */
router.get("/", async (req, res) => {
  PostModel.getAll()
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(400).json({
        status: false,
        message: "Failed to retrieve posts"
      })
    );
});

/**
 * @route POST /api/posts/
 * @desc: create a new post
 * @access Public
 */
router.post("/", async (req, res) => {
  const { name, region, comment } = req.body;

  PostModel.createOne(name, region, comment)
    .then(post => res.json(post))
    .catch(err =>
      res.status(500).json({
        status: false,
        message: "Failed to create a new post"
      })
    );
});

module.exports = router;
