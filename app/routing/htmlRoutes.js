module.exports = function(app){

    var path = require("path");

    //home page
    app.get("/",function(req,res){
        res.sendFile(path.join(__dirname,"../public/home.html"));
    })
     //home page
     app.get("/survey",function(req,res){
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    })
}