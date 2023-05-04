const Schema = require('mongoose').Schema
const Model = require('mongoose').model

const schema = new Schema({
    race:{
        type: String
    },
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

module.exports = Model('Pets',schema)