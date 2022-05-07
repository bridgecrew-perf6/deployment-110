const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("Public"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../Public/index.html"));
});

app.get("/js", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/index.js"));
});

app.get("/css", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/main.css"));
});

app.get("/img", (req, res) => {
  res.sendFile(path.join(__dirname, "../Public/Images"));
});
const port = process.env.PORT || 4005;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
