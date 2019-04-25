const express = require("express");
const router = express.Router();

/**
 * @route GET /
 * @desc: GET home page
 * @access Public
 */
router.get("/", (req, res, next) => {
  res.render("index", { title: "Success!" });
});
