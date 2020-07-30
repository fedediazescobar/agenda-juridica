const {Schema, model } = require('mongoose')

const Case = new Schema({
    user_id: {
        type: String, 
        required: true
    },
    responsable: {
        type: String, 
        required: true
    },
    caratula: {
        type: String, 
        required: true
    },
    juzgado: {
        type: String, 
        required: true
    },
    secretaria: {
        type: String, 
    },
    
    fuero : {
        type: String, 
    },
    direccion: {
        type: String, 
    },
    lugar: {
        type: String, 
    },
    team_leader: {
        type: String, 
        required: true
    },
    num_expte: {
        type: String, 
        required: true
    },
    num_carpeta: {
        type: String, 
        required: true
    },
    cliente: {
        type: String, 
        required: true
    },
    active: {
        type: Boolean, 
        default: true
    },
})


module.exports = model('cases', Case)

