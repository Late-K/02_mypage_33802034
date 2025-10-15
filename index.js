const express = require("express");

const app = express();
const port = 8000;

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/other", (req, res) => {
  res.sendFile(__dirname + "/other.html");
});

app.listen(port, () =>
  console.log(`Node server is running on http://localhost:${port}/`)
);
