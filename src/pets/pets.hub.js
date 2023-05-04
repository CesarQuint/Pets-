const { response } = require('express')
const Services = require('./pets.service')

const createPet = async (req,res) => {
try {
    const {body} = req

    const data ={
        race : body.race,
        name : body.name,
        age : body.age,
    }

    res.status(200).send(await Services.createPet(data))

} catch (error) {
    req.status(404)
}

}

const getPets = async (req,res) => {
try {
    
} catch (error) {
    
}
}

const getPet = async (req,res) => {
try {
    
} catch (error) {
    
}
}

const updatePet = async (req,res) => {
try {
    
} catch (error) {
    
}
}

const deletePet = async (req,res) => {
try {
    
} catch (error) {
    
}
}

module.exports= {
    createPet,
    getPets,
    getPet,
    updatePet,
    deletePet
}