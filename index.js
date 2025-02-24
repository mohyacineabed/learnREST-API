// require express to use it
const express = require('express');

//set up express app
const app = express();

app.get("/api", function(req, res) {
    console.log("GET request");
    res.send({name: 'Yoshi'});
});

// make express listen to requests via port number
app.listen(4000, function(){
    console.log("listening for requests...");
});

// if we are deploying the app:
/*
app.listen(process.env.port || 4000, function(){

});
*/