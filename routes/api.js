const express = require('express');
const router = express.Router();

// GET request handler
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'});
});

// POST request handler
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'});
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