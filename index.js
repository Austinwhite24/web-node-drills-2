require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 3035
const ctrl = require('./controller')

app.use(express.json())
app.use(cors())

app.get('./api/info', ctrl.getInputs)
app.post('./api/info', ctrl.createInput)

app.listen(PORT, () => console.log(`easy eat running on ${PORT}`))