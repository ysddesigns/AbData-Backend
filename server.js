require("dotenv").config();
const express = require("express");
const mongoose = require("./config/db");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const PORT = process.env.PORT;

const app = express();

// middleware
app.use(express.json());

// default route
app.get("/", (req, res) => {
  res.send("Welcome to my first MERN STACK APP");
});

// routes
app.use("/api/auth", authRoutes);
app.use("api/users", userRoutes);

app.listen(PORT, (req, res) => {
  console.log(`server start at port ${PORT}`);
});
