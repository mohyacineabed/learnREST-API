const bodyParser = require('body-parser');
const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();

// GET request handler
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// POST request handler
router.post('/ninjas', function(req, res){
    /* // create a ninja object
    var ninja = new Ninja(req.body);
    // save to database of ninjas collection
    ninja.save(); */

    // create a ninja object and save it to the collection
    Ninja.create(body.req);

    res.send({
        type: 'POST',
        name: req.body.name,
        rank: req.body.rank
    });
});

// PUT request handler
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// DELETE request handler
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'});
});

module.exports = router;