const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    initials: {
        type: String,
        required: true,
        uppercase: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    admin: {
        type: Boolean,
        required: true
    },
})

User.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password, salt)
    return hash;
 }
 
User.methods.matchPassword = async  function (password) {
         return await bcrypt.compare(password, this.password)
 }

 module.exports= model('users', User)