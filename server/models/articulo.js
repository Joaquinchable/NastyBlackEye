const mongoose = require("mongoose");

const articleSchema = mongoose.Schema({


    titulo: {
        type: String,
        required: true,
        maxlenght: 100

    },

    autor: {
        type: String,
        require: true

    },
    contenido: {
        type: String,
        require: true

    },

    fecha: {
        type: String,
        require: true

    }









})



const articulo = mongoose.model("Articulo", articuloSchema, "articles")
module.exports = { articulo }