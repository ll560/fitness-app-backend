const User = require('../../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
//Create a User
const create = async (req, res) => {
    try {
        const createdUser = await User.create(req.body)
        res.status(200).json(createdUser)
    } catch (e) {
        res.status(400).json({msg: e.message})
    }
}
//login
const login = async (req, res) => {
    try{
        //Find the user by email
        const user = await User.findOne({
            email: req.body.email
        })
        if(!user) throw new Error()//if we dont find the user throw and error

        const match = await bcrypt.compare(req.body.password, user.password)//compare() is a method that compares what ever the user sent from the req.body and whats in the database. Under the hood it is apllying the same hashing process

        if (!match) throw new Error()//if the pws dont match throw error
        res.status(200).json(createJWT(user))
    }catch(e){
        res.status(401).json({
            msg: e.message,
            reason: 'Bad Credentials'
        })
    }
}

//Find a user
const show = async (req, res) => {
    try {
        const foundUser = await User.findById(req.params.id)
        res.status(200).json(foundUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//update a user
const update = async (req, res) => {
    try {
        //Pre and Post save() hooks are not executed on update() and findOneAndUpdate(), etc.
        //we need to handle our password hashing here and not in our pre-hook
        //the line below ensures that the password is hashed
        req.body.password = await bcrypt.hash(req.body.password, 10)
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.status(200).json(updatedUser)
    } catch(e) {
        res.status(400).json({msg: e.message})
    }
}

//GET user's favorite
const getFavorites = async (req, res) => {
    try{
        const favorites = await User.findById(req.params.id).select('favorites')
        res.status(200).json(favorites)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}

//Helper Function
const createJWT = user => {
    //JWT is created with a secret key and that secret is private to you which means its never realed to public. it is stored in the server and must match with the client sends back.
    return jwt.sign(
        //payload
        {user}, 
        //secret
        process.env.SECRET,
        //options
        {expiresIn: '48h'}
    )
}


module.exports = {
    create,
    login,
    show,
    update,
    getFavorites
}