// require express to use it
const express = require('express');
const bodyParser = require('body-parser');

// require router
const routes = require('./routes/api');

//set up express app
const app = express();

app.use(bodyParser.json);

app.use('/api', routes); 

// make express listen to requests via port number
app.listen(process.env.port || 4000, function(){
    console.log("listening for requests...");
});
