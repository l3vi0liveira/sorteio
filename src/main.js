const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require("./routes");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

app.get("/", (req, res) => {
  return res.send("Welcome to server");
});

app.listen(3312, () => {
  console.log("Server online in port: 3312");
});
