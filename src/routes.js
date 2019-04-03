const express = require('express')

const routes = express.Router()

const PersonagemController = require('./controller/PersonagemController')

routes.get('/', PersonagemController.fetchAll)
routes.get('/:id', PersonagemController.fetchOne)
routes.post('/', PersonagemController.create)
routes.patch('/:id', PersonagemController.update)
routes.delete('/:id', PersonagemController.delete)
module.exports = routes