const bodyParser = require('body-parser');
const express = require('express');
const Ninja = require('../models/ninja');
const router = express.Router();

// GET request handler
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// POST request handler
router.post('/ninjas', function(req, res, next){
    /* // create a ninja object
    var ninja = new Ninja(req.body);
    // save to database of ninjas collection
    ninja.save(); */

    // create a ninja object and save it to the collection
    // then after the data is passed in the body and saved,
    // run the function with the saved data 'ninja' as a parameter
    Ninja.create(req.body).then(function(ninja){
        res.send(ninja);
    }).catch(next);
});

// PUT request handler
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'});
});

// DELETE request handler
router.delete('/ninjas/:id', function(req, res){
    Ninja.findByIdAndDelete({_id: req.params.id}).then(function(ninja){
        res.send(ninja);
    });
});

module.exports = router;