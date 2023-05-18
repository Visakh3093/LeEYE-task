
const express = require("express");
const mongoose = require("mongoose");
const router = require("./router/route");

const app = express();

// View engine setup
app.set("view engine", "ejs");
app.set("views", "./views/user");

// Staticfile setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", express.static("public"));

// MongoDB connection
mongoose.set("strictQuery", true);
mongoose
  .connect("mongodb://127.0.0.1:27017/LeEYE",)
  .then(() => console.log("MongoDB connection established!"))
  .catch((err) => console.log("Error:", err));

// Route setup
app.use("/", router);

// Server connection
const PORT = 7000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    