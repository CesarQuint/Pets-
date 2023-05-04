const Router = require("express").Router();
const Hub = require('./pets.hub')

Router.get('/pets', Hub.getPets)
Router.get('/pets/:petId', Hub.getPet)
Router.post('/pets', Hub.createPet)
Router.put('/pets/:petId', Hub.updatePet)
Router.delete('/pets/:petId', Hub.deletePet)

module.exports = Router