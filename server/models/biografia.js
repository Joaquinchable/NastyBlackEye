const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const biografiaSchema = mongoose.Schema({


    name: {
        type: String,
        required: true,
        maxlenght: 100,
        unique: 1
    },
    biografia: {
        type: String,
        required: true,
        maxlenght: 10000,
        unique: 1
    },

    biofoto: {
        type: Schema.Types.ObjectId,
        ref: 'Biofoto',
        required: true
    },

    biofotoDAy: {
        type: Number,
        default: 0,
        maxlenght: 1000
    },

    images: {
        type: Array,
        default: []
    }



}, { timestamps: true });



const Biografia = mongoose.model('Biografia', biografiaSchema)
module.exports = { Biografia } 