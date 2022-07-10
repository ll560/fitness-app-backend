const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)

const db = mongoose.connection //this listens to a connection 

db.on('connected', () => {
    console.log(`Connected to ${db.name} at ${db.host}:${db.port}.`)
})

