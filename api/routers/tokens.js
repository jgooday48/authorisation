const { Router } = require('express');

const tokenController = require('../controllers/token.js');

const tokenRouter = Router();

tokenRouter.get("/", tokenController.index)
tokenRouter.delete("/:token",tokenController.logOut)

module.exports = tokenRouter;
