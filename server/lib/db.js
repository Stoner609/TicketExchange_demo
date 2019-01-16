const mongoose = require("mongoose");
require("dotenv").config();

mongoose.set('useFindAndModify', false);
mongoose.connect(
  process.env.DB_URL,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function callback() {
  console.log("Database Connected.");
});