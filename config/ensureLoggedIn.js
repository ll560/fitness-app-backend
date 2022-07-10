module.exports = (req, res, next) => {//this function explains that if we dont have a user in the request return unauthorized 
    if(!req.user) return res.status(401).json('Unauthorized')
    next()//this method runs the next middleware
}