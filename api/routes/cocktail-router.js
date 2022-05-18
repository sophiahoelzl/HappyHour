const { Router } = require('express');
const controller = require('../controllers/cocktail-controller');

const routes = Router();

routes.get('/cocktails', controller.getCocktails);

module.exports = routes;