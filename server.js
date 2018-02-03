const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const https = require("https");

const app = express();

app.set("port", process.env.PORT || 8080);

app.use("/", express.static(path.join(__dirname, "dist")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, X-Requested-With"
  );
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
  res.setHeader("Pragma", "no-cache");
  res.setHeader("Expires", "0");
  next();
});

let options = {
  key: fs.readFileSync(path.join(__dirname, "certs/testing.key")),
  cert: fs.readFileSync(path.join(__dirname, "certs/testing.crt"))
};

https.createServer(options, app).listen(app.get("port"), function() {
  const port = app.get("port");
  console.log(
    `Viewer page running at https://localhost:${port}/viewer/viewer.html`
  );
  console.log(
    `Config page running at https://localhost:${port}/config/config.html`
  );
  console.log(
    `Live-Config page running at https://localhost:${port}/live_config/live_config.html`
  );
});
