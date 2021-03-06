const mongoose = require('mongoose');

//const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;


let categoriaSchema = new Schema({
    descripcion: {
        type: String,
        required: [true, 'La descripción es necesaria.'],
        unique: true
    },
    usuario: { type: Schema.Types.ObjectId, ref: 'Usuario' }


});

// categoriaSchema.plugin(uniqueValidator, {
//     message: '{PATH} debe de ser unico'
// });

module.exports = mongoose.model('Categoria', categoriaSchema);