require("dotenv").config();
const Config = {
  POSTGRES_URL: process.env.POSTGRES_URL
};
module.exports = Config;
