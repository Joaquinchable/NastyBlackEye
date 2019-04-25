const mongoose = require('mongoose');

const articuloSchema = mongoose.Schema({


    name: {
        type: String,
        required: true,
        maxlenght: 100,
        unique: 1
    },











})



const Articulo = mongoose.model('Articulo', articuloSchema)
module.exports = { Articulo }