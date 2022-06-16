const { Router } = require('express');
const controller = require('../controllers/user-controller');

const routes = Router();

routes.post('/user', controller.registerUser);

module.exports = routes;