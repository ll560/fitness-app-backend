const mongoose = require('mongoose')
const Schema =  mongoose.Schema

const workoutSchema = new Schema({
    exercise: {
        type: String,
        require: true
    }, 
    exerciseimage:{
        type: String
    },
    
        exercisecomment:{
            type: String
    }
    
})

module.exports = mongoose.model('Workout', workoutSchema)