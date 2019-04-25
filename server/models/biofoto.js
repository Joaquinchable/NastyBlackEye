const mongoose = require('mongoose');

const biofotoSchema = mongoose.Schema({


    name: {
        type: String,
        required: true,
        maxlenght: 100,
        unique: 1
    }

});



const Biofoto = mongoose.model('Biofoto', biofotoSchema)
module.exports = { Biofoto } 