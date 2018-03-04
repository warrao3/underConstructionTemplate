var express = require("express");
var app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));//allows use of stylsheets and scripts

app.get("/", function(req, res)
{
    res.render("index");
});

app.get("*", function(req, res)
{
   res.send("404 error, this page does not Exist!!!") ;
});



//if app works fine without errors console out server has started!!!
app.listen(process.env.PORT, process.env.IP, function()
{
    console.log("Server Started!!!!");
});