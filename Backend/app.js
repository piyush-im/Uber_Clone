const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const express = require("express");
const cookieParser = require("cookie-parser");

const connectTodb = require("./db/db");
connectTodb();

const userRoutes = require("./routes/user.routes");
const captainRoutes = require("./routes/captain.routes");

const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173",   // frontend vite
    credentials: true                  // allow cookies & auth headers
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
    res.send("Welcome to the Uber Video API!");
});

app.use("/users", userRoutes);
app.use("/captains", captainRoutes);

module.exports = app;
