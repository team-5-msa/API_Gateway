const jwt = require("jsonwebtoken");
require('dotenv').config();

const JWT_Token = process.env.JWT_SECRET;

const verifyToken = (token) => {
  try {
    return jwt.verify(token, JWT_Token);
  } catch (err) {
    return null;
  }
};

module.exports = { verifyToken };
