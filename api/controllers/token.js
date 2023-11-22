const Token = require('../models/token')


async function index(req,res) {// displays all tokens
    try {
        const tokens = await Token.getAll()
        res.status(200).json(tokens)
    } catch (err) {


          res.status(500).send({error:err.message})      
    }
}

async function logOut(req,res) {// removes token when a user logs out

    try {
        const token = req.params.token
        const tokenToDelete = await Token.getOneByToken(token)
        const deletedToken = await tokenToDelete.removeToken()
        res.status(204).send(deletedToken)
        
    } catch (err) {
        res.status(404).send({error:err.message})
        
    }


}

module.exports = {
    index, logOut
}
