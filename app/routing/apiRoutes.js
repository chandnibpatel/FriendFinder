
var friends = require("../data/friends");

module.exports = function(app){
   
 
    //view friends
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });
    app.post("/api/friends", function(req, res) {
        console.log(req);
        res.json(friends);
    });


};