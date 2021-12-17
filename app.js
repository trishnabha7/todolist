const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();

const items =[];
const workItems =[];
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("Public"));

app.get("/", function(req, res){

const day = date();

 res.render("list", {ListTitle: day, newListItem: items});
});

app.post("/", function(req, res){

  const item = req.body.newItem;
  if(req.body.list === "Work"){
  workItems.push(item);
  res.redirect("/work")
} else {
  items.push(item);
  res.redirect("/")
}

});
app.get("/work",function(req,res){
  res.render("list", {ListTitle: "Work List", newListItem: workItems});
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
