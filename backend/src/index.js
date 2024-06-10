require("dotenv").config();

const express = require("express");
const Routes = require("./routes/index");
const db = require("./models/index");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3100;

const corsMiddleware = cors({
  corsOptions: {
    origin: true,
    credentials: true,
  },
});

// Cors options configured
app.use(corsMiddleware);

// Parses application/json, basically parses incoming Request Object as a JSON Object
app.use(express.json());

// Test the db connection
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err.original);
  });

// configure Routes
app.use("/api", Routes);

app.use((req, res) => {
  res.header("Content-Type", "application/json");
  res.status(404);
  res.send({ message: "Path Not Found" });
});

// set port, listen for requests
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

module.exports = app;
