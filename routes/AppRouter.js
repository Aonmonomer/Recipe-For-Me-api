const Router = require('express').Router()
const RecipeRouter = require('./RecipesRouter')
const UserRouter = require('./UserRouter')
const CatRouter = require('./CategoryRouter')

Router.use('/recipes', RecipeRouter)
Router.use('/users', UserRouter)
Router.use('/categories', CatRouter)

module.exports = Router
