const mongoose = require("mongoose");
require("dotenv").config();
const connection = mongoose.connect(process.env.BASE_URL);

module.exports = { connection };
