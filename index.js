/* EJS = Embedded JavaScript
  1. NodeJS looks for ejs files in "views"
  2. ejs files end with .ejs
  3. Have to let the NodeJS engine know that we are using ejs
*/

var express = require("express");
var app = express();
var bodyParser = require("body-parser");


var friendList = ["Alice", "Clark", "Bell", "Octavia"];

app.use(express.static("css"));
app.use(bodyParser.urlencoded({extended: true}));

app.post("/addfriend", function(req, res){
  var newfriend = req.body.newfriend;
  friendList.push(newfriend);
  res.redirect("/friends");
});

app.get("/", function(req, res){
  res.render("home.ejs");
});

app.get("/friends", function(req, res){
  res.render("friends", {friends: friendList})
})

app.listen(3000, function(){
  console.log("Server is up and running");
});

app.get("*", function(req, res){
  res.render("error.ejs");
});

app.set("view engine", "ejs");
