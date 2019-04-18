const mongoose = require("mongoose");

const biofotoSchema = mongoose.Schema({


    name: {
        type: String,
        required: true,
        maxlenght: 100

    },

    images: {
        type: [],
        required: true,
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



const biofoto = mongoose.model("Biofoto", biofotoSchema, "biofotos")
module.exports = { biofoto } 