require('dotenv').config()
const Express = require("express"); 
const Database = require('./src/db')
const Router = require('./src/router')

const app = Express(); 
const PORT = process.env.PORT || 3000;

app.use(Express.json())

app.use(Router)

Database.then(() => {
    app.listen(PORT, () => {
        console.info(`[PORT] ${ PORT }`)
        console.info(`[TZ] ${ new Date() }`)
    })
}).catch(() => {
    process.exit(0)
})