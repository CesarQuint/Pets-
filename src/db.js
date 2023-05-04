require('dotenv').config()
const Mongoose = require('mongoose')

module.exports = new Promise((resolve, reject) => {

    Mongoose.set('strictQuery', false)
    Mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
        family: 4,
    })
        .then(async () => {

            console.info(`[MONGODB] (SUCCESS) ${ process.env.MONGODB }`)

            resolve()
        })
        .catch(error => {
            console.info(`[MONGODB] (ERROR) ${ process.env.MONGODB }`)
            console.info(error)
            reject()
        })
})