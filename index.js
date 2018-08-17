var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const arr = ["hello", "world", "test"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.render("index", { arr: arr });
});
app.get("/create", function(req, res) {
  res.render("create");
});

app.post("/create", (req, res) => {
  arr.push(req.body.text);
  res.redirect("/");
});

app.listen(3000);
