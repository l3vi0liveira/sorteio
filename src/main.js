const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.get("/", (req, res) => {
  return res.send("Welcome to server");
});

app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);

app.listen(3312, () => {
  console.log("Server online in port: 3312");
});
