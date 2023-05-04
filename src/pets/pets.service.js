const Model = require ('./pets.model')

const createPet = async (data) => {
    try {
        const Pet = new Model(data)

        await Pet.save()

        return Pet

    } catch (error) {
        throw error
    }
    
}
const getPets = async (data) => {
    
}
const getPet = async (data) => {
    
}

const updatePet = async (data) => {
    
}

const deletePet = async (data) => {
    
}

module.exports= {
    createPet,
    getPets,
    getPet,
    updatePet,
    deletePet
}