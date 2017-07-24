var express = require("express");
var app     = express();
var path    = require("path");
var passport = require('passport');


app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/First/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.post('/login',function(req,res)  {

    res.sendFile(path.join(__dirname+'/WelcomePage/welcomePage.html'));
    });

app.get('/revenueDetails',function(req,res){
  res.sendFile(path.join(__dirname+'/RevenueDetails/RevenueDetails.html'));

});

app.get('/modifyDetails',function(req,res){
  res.sendFile(path.join(__dirname+'/ModifyRevenue/ModifyRevenue.html'));
});

app.listen(3000);

console.log("Engine Started at Port 3000");