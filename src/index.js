const express = require('express')
const routes = require('./routes')

const app = express()
require('./database')
app.set('port', 3000)

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


app.use('/api', routes)


const PORT = app.get('port')
app.listen(PORT, ()=> {
    console.log('listen on port', PORT )
})