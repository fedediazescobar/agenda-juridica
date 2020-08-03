const {Router} = require('express')
const { getUser, deleteUser, addUser, updateUser } = require('../controllers/user.controller')
const { taskByCase, taskByDate, taskByUser, getTask, addTask, deleteTask, updateTask} = require('../controllers/task.controller')
const {getCase, deleteCase, updateCase, addCase } = require('../controllers/case.controller')
const router = Router()

//user
router.get('/user/:id', getUser )

router.post('/user/:id', addUser )

router.delete('/user/:id', deleteUser )

router.put('/user/:id', updateUser )


//tasks

router.get('/tasks-by-date', taskByDate )

router.get('/tasks-by-case', taskByCase)

router.get('/tasks-by-user', taskByUser )

router.get('/task/:id', getTask )

router.post('/task/:id', addTask )

router.delete('/task/:id', deleteTask )

router.put('/task/:id', updateTask )


//Cases

router.get('/case/:id', getCase )

router.post('/case', addCase)

router.delete('/case/:id', deleteCase )

router.put('/case/:id', updateCase)


module.exports = router