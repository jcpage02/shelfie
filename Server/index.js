const express = require('express');
const bodyParser = require('body-parser');
const ctrl = require('./controller')
const massive = require('massive')
require('dotenv').config()

const app = express()
app.use(bodyParser.json())
// app.use(express.static(server + '/../public/build'))


app.get('/api/inventory', ctrl.getAll)
app.post('/api/product', ctrl.create)
app.put('/api/product/:id', ctrl.update)
app.delete('/api/product/:id', ctrl.delete)


massive(process.env.CONNECTION_STRING)
    .then(connection => {
        app.set('db', connection)
        app.listen(process.env.PORT, () => console.log(`listening on port ${process.env.PORT}`))
    })
    .catch((err) => { console.log(err) })





