const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

app.get("/files", (req, res) => {
  fs.readdir(path.join(__dirname, "./files/"), (err, files) => {
    if (err) {
      return res.status(500).json({
        message: "Invalid Directory",
      });
    }
    res.json(files);
  });
});
app.get("/file/:filename", (req, res) => {
  const filename = req.params.filename;
  const filepath = path.join(__dirname, "./files/", filename);
  fs.readFile(filepath, "utf-8", (err, data) => {
    if (err) {
      return res.status(404).send("File not found");
    }
    res.send(data);
  });
});
app.all("*", (req, res) => {
  res.status(404).send("Route not found");
});
app.listen(3000, () => {
  console.log("Listening to the port 3000");
});
