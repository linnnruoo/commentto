const express = require("express");
const router = express.Router();

const replySubRouter = require("./replies");
const postSubRouter = require("./posts");

router.use("/replies", replySubRouter);
router.use("/posts", postSubRouter);

module.exports = router;
