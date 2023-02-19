const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const result = new Date();
  const dateTime = addDays(
    new Date(result.getFullYear(), result.getMonth(), result.getDate()),
    100
  );
  response.send(
    `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()}`
  );
});

module.exports = app;
