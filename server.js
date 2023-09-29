const express = require("express");
require("dotenv").config();
const connection = require("./config/db");
const app = express();
const port = process.env.port;

app.listen(port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(error.message);
    console.log("Somethig went wrong at connecting to DB");
  }
  console.log(`Server is listening to:${port}`);
});
