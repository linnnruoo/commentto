const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const apiRouter = require("./routes/api");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, "public")));

// Http requests to /api
app.use("/api", apiRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build/index.html"));
  });
}

// listen to the port of the live server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port} huehue`));

module.exports = app;
