const express = require('express');
const app = express();
const bodyParser= require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){res.sendFile(__dirname+"/index.html");});

app.post("/",function(req,res){
  //console.log(req.body);
  var n1=Number(req.body.w);
  var n2=Number(req.body.h);
  var result= n1/(n2*n2);
  res.send("The BMI is: "+result);

  res.send("Thanks for posting the form!");});

app.listen(3000,function(){ console.log("Server has started on port 3000");});

app.get("/about", function(req, res){res.send("<h1>Rutu Shrirame</h1><p>Hi! I'am Rutu Shrirame, a first year student at VNIT Nagpur.</p><p>This is my first project using JavaScript as part of ShapeAI backend dev bootcamp</p>");});
