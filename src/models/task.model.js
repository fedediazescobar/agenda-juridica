const { Schema, model } = require('mongoose')

const Task = new Schema ({
    user_id: {
        type: String,
        required: true
    },
    case_id: {
        type: String,
        required: true
    },
    date_added: {
        type: Date,
        default: new Date().toISOString()
    },
    date_completed: {
        type: Date,
        default: new Date().toISOString()
    },
    date_deadline: {
        type: Date,
        default: new Date().toISOString()
    },
    title: {
        type: String, 
        required: true
    },
    content: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    }


})


module.exports= model('tasks', Task)