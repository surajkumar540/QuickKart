const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const port = 8000;
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose
  .connect("mongodb+srv://surajgautam56878:surajgautam56878@cluster0.rot4qnp.mongodb.net/QuickKart")
  .then(() => {
    console.log("✅ Connected to MongoDB");
  })
  .catch((err) => {
    console.log("❌ Error connecting to MongoDB:", err);
  });

app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
