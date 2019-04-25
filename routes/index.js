const express = require("express");
const router = express.Router();

/**
 * @route GET /
 * @desc: GET home page
 * @access Public
 */
router.get("/", (req, res, next) => {
  console.log("Welcome!");
});

module.exports = router;
