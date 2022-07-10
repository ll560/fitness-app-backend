const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
require('./config/database')

//===MIDDLEWARES===
app.use(express.json())
app.use(cors())
app.use(require('./config/checkToken'))




//===ROUTES====
//Users
app.use('/api/v1/users', require('./routes/api/users.js'))
//const ensureLoggedIn = require('./config/ensureLoggedIn')


//====PORT====
const port = 8080
app.listen(port, () => console.log(`Express app running on port ${port}`))