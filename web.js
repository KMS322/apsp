const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
  console.log("get");
});

const PORT = process.env.PORT || 8001;

app.listen(PORT, () => {
  console.log(`Server is run`);
});
