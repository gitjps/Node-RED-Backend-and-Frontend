const express = require("express");
const path = require("path");
const app = express();
var http = require("http");
var bodyParser = require("body-parser");

app.use(bodyParser.json({ type: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const distDir = path.join(__dirname, "./public");
app.use(express.static(distDir));
app.use(express.static(path.join(__dirname, "./public")));

var port = process.env.PORT || 3001;

http
  .createServer(app)
  .listen(port, () => console.log("Listening on port (" + port + ")"));

app.get("/", (req, res) => res.redirect("/simple_web_app"));
app.get("/simple_web_app", (req, res) => {
    res.sendFile(path.join(distDir, "webapp.html"))
  } 
);
