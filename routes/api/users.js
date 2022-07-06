const express = require('express')
const router = express.Router()
const userCtrl = require('../../controllers/api/users')

//GET 
router.get('/:id/favorites', usersCtrl.getFavorites)

module.exports = router