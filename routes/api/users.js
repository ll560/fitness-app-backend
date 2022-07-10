const express = require('express')
const router = express.Router()
const usersCtrl = require('../../controllers/api/users')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

//POST - create /api/v1/users
router.post('/', usersCtrl.create)

//POST - login /api/v1/users/login
router.post('/login', usersCtrl.login)

//the below routes show not be accessible to unauthorized users
// //GET - show /api/v1/users/:id
router.get('/:id', ensureLoggedIn, usersCtrl.show)

//GET /api/v1/users/:id/favorites
router.get('/:id/favorites', ensureLoggedIn, usersCtrl.getFavorites)

//PUT - update 
router.put('/:id', ensureLoggedIn, usersCtrl.update)

module.exports = router
