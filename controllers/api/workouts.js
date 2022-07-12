const Workout = require('../../models/Workout')

//find all workouts
const index = async (req, res) => {
    try{
        const workouts = await Workout.find({})//find({}) is a way for mongoose to find the whole document 
        res.status(200).json(workouts)
    }catch(e){
        res.status(400).json({msg: e.message})
    }
}

//create
const create = async (req, res) => {
    console.log(req.body)
    try{
        const createdWorkout = await Workout.create(req.body)
        res.status(200).json(createdWorkout)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

const update = async (req, res) => {
    try{
        const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedWorkout)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}
const remove = async (req, res) => {
    try {
        const deletedWorkout = await Movie.findByIdAndDelete(req.params.id)
        res.status(200).json(deletedWorkout)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}


module.exports = {
    index, 
    create,
    update,
    remove
}