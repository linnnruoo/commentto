const express = require("express");
const router = express.Router();

const ReplyModel = require("../../../model/Reply");

/**
 * @route GET /api/replies/
 * @desc: Get all the replies
 * @access Public
 */
router.get("/", async (req, res) => {
  ReplyModel.getAll()
    .then(posts => res.json(posts))
    .catch(err =>
      res.status(400).json({
        status: false,
        message: "Failed to retrieve posts"
      })
    );
});

/**
 * @route POST /api/replies/
 * @desc: add a new reply to a post
 * @access Public
 */
router.post("/", async (req, res) => {
  const { pid, name, comment } = req.body;

  ReplyModel.createOne(pid, name, comment)
    .then(reply => res.json(reply))
    .catch(err =>
      res.status(500).json({
        status: false,
        message: "Failed to add a reply"
      })
    );
});

module.exports = router;
