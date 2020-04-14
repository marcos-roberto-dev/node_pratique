const { Router } = require('express');
const ProductController = require('../controllers/ProductController');

const routes = new Router();

routes.get('/products', ProductController.index);

// routes.get('/products/:filter', ProductController.show);

routes.post('/products', ProductController.store);

routes.put('/products/:id', ProductController.update);

routes.delete('/products/:id', ProductController.destroy);

module.exports = routes;