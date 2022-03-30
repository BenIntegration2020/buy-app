const express = require('express');
const routes = express.Router();
const homeController = require('../controllers/homeController');

// routes.get('/', homeController.getIndex);
// routes.get("/products", homeController.getIndex);
routes.post('/new', homeController.saveProduct);

routes.get('/new', homeController.AddNewProduct);
routes.get("/:id", homeController.FindOneProduct);
routes.get('/', homeController.ShowAllProducts);

module.exports = routes;