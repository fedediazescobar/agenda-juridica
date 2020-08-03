const CASE = require('../models/case.model')

const getCase = async (req, res) => {
    const oneCase = await CASE.findById(req.params.id)
    res.json(oneCase)

}

const addCase = async (req, res ) => {
    const {user_id, responsable, caratula, juzgado, secretaria, fuero, direccion, lugar, team_leader, num_expte, num_carpeta, cliente, active} = req.body
    const newCase = new Case ({user_id, responsable, caratula, juzgado, secretaria, fuero, direccion, lugar, team_leader, num_expte, num_carpeta, cliente, active})
    await newCase.save()
    res.json('Causa agregada')
}

const deleteCase = async (req, res ) => {
    await CASE.findByIdAndRemove(req.params.id)
    res.json('Causa removida')
}

const updateCase = async (req, res ) => {
    const {user_id, responsable, caratula, juzgado, secretaria, fuero, direccion, lugar, team_leader, num_expte, num_carpeta, cliente, active} = req.body
    const updateCase = {user_id, responsable, caratula, juzgado, secretaria, fuero, direccion, lugar, team_leader, num_expte, num_carpeta, cliente, active} 
    await CASE.findByIdAndUpdate(req.params.id, updateCase)
    res.json('Causa actualizada')
}

module.exports = {
    getCase,
    addCase,
    updateCase,
    deleteCase
}