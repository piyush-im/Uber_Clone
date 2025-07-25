const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 86400 // 24 hours in seconds
  }
});

const BlacklistedToken = mongoose.model("BlacklistedToken", blacklistSchema);

module.exports = BlacklistedToken;