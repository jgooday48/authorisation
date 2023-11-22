const { Router } = require('express');

const tokenController = require('../controllers/token.js');
const tokenRouter = Router();

tokenRouter.get("/", tokenController.index)
tokenRouter.delete("/:token",tokenController.logOut) // acceses token via entire token string, not token id

module.exports = tokenRouter;
