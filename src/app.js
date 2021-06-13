const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendStatus(500);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

module.exports = app;
