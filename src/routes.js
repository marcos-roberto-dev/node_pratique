const { Router } = require('express');
const UserController = require('./controllers/UserController');

const routes = new Router();

routes.get('/', UserController.show);

routes.post('/', UserController.index);

routes.post('/users', UserController.create);

routes.put('/users/:id', UserController.update);

routes.delete('/users/:id', UserController.destroy);

module.exports = routes;