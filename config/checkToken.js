const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    //Check for token deing sent in headers or a query parameter
    let token = req.get('Authorization') 

    if(token){
        token = token.replace('Bearer ', '') //need to have a space after Bearer for token string, goole replace() Bearer
        
        //checking to see if token is valid and not expired. in users our token expires in 24h
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            console.log(decoded)
            req.user = err ? null : decoded.user

            //Expiration
            req.exp = err ? null: new Date(decoded.exp * 1000)
        })
        next()
    } else {
        //no token was sent in headers
        req.user = null
        next()
    }
}

