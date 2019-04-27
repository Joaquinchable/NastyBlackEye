const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = mongoose.Schema({


    name: {
        type: String,
        required: true,
        maxlenght: 100,
        unique: 1
    },

    texto: {
        type: String,
        required: true,
        maxlenght: 10000,
        unique: 1
    },

    articulo: {
        type: Schema.Types.ObjectId,
        ref: 'Articulo',
        required: true
    },

    articuloDAy: {
        type: Number,
        default: 0,
        maxlenght: 1000
    },

    images: {
        type: Array,
        default: []
    }



}, { timestamps: true });



const Blog = mongoose.model('Blog', blogSchema)
module.exports = { Blog } 