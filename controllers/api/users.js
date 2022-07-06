const userCtrl = require('../../controllers/api/users')

//GET user's favorite
const getFavorites = async (req, res) => {
    try{
        const favorites = await User.findById(req.params.id).select('favorites')
        res.status(200).json(favorites)
    } catch(e){
        res.status(400).json({msg: e.message})
    }
}


module.exports = {
    getFavorites
}