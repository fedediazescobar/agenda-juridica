const USERS = require('../models/user.model')

const getUser = async (req, res) => {
    const user = await USERS.findById(req.params.id)
    res.json(user)
}

const addUser = async (req, res) => {
    const { name, email, password, initials, admin}= req.body
    const user = new User({name, email, password, initials, admin})
    await user.save()
    res.json('usuario guardada')
}

const deleteUser = async (req, res) => {
   await USERS.findByIdAndRemove(req.params.id)
   res.json('usuario eliminado')
}

const updateUser = (req, res) => {
    const { name, email, password, initials, admin}= req.body
    const updateUser = {name, email, password, initials, admin}
    await USERS.findByIdAndUpdate(req.params.id, updateUser)
    res.json('usuario actualizado')
}

module.exports = {
    getUser,
    addUser,
    deleteUser,
    updateUser
}