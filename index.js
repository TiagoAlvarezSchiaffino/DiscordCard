require('dotenv').config();
const express = require("express");

const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

// let allowedOrigins = [
//   'https://localhost:3000',
//   'http://localhost:3000',
// ]

app.use(cors());
app.use(express.json());

// Routes
const { profile, avatar, banner, badge } = require("./routes/routes");

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the API for retrieving a Discord user's profile, avatar, and banner. Use /api/profile/:id, /api/avatar/:id, or /api/banner/:id to retrieve the information.");
});
app.use('/api/profile', profile);
app.use('/api/avatar', avatar);
app.use('/api/banner', banner);
app.use('/api/badge', badge);

app.listen(port, () => {
  console.log(`The API is listening on port ${port}`);
});