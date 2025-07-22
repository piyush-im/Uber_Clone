const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");

const express = require("express");
const app = express();

const cookiesParser = require("cookie-parser");

const connectTodb=require("./db/db");
connectTodb();
const userRoutes= require("./routes/user.routes");

const captainRoutes=require("./routes/captain.routes");




// Middleware
app.use(cors());
app.use(express.json());
app.use(cookiesParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Uber Video API!");
});

app.use("/users", userRoutes);

app.use("/captains", captainRoutes);

module.exports = app;
