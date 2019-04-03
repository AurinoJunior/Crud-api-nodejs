const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const requireDir = require('require-dir')

const port = process.env.PORT || 3000

// Iniciando o Banco de dados
mongoose.connect('mongodb://localhost:27017/got', { useNewUrlParser: true });

// Permitindo JSON
app.use(express.json())
app.use(cors());

requireDir('./src/models')

app.use('/got', require('./src/routes'))

app.listen(port, () => {
  console.log(`Rodando na porta ${port}`)
})