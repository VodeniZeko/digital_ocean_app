const express = require("express");
const server = express();
const port = 3000;

server.get("/", (req, res) => {
  res.send("hello from app.js");
});

server.get("/teapot", (req, res) => {
  res.set("X-full-stack", "learnin");
  res.status(418);
  res.send("this is the tea pot joke");
});

server.listen(port, () => {
  console.log(`listening at port ${port}`);
});
