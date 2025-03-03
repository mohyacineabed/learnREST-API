const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create ninja Schema and model
const NinjaSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter ninja name!']
    },
    rank: {
        type: String
    },
    available: {
        type: Boolean,
        default: false // if not specified when creating a ninja
    }
});

const Ninja = mongoose.model('ninja', NinjaSchema); 
                             // ninja is the name of the collections
module.exports = Ninja;