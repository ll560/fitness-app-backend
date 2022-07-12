const express = require('express')
const router = express.Router()
const workoutsCtrl = require('../../controllers/api/workouts')

//GET
router.get('/', workoutsCtrl.index)
//POST
router.post('/', workoutsCtrl.create)
//PUT
router.put('/:id', workoutsCtrl.update)
//DELETE
router.delete('/:id', workoutsCtrl.remove)

module.exports = router 