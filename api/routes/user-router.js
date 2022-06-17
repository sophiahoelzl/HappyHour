const { Router } = require('express');
const controller = require('../controllers/user-controller');

const routes = Router();

routes.post('/user', controller.registerUser);

routes.get('/users', controller.getUser);

module.exports = routes;