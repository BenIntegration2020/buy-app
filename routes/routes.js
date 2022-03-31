const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

// routes.get('/', homeController.getIndex);
// routes.get("/products", homeController.getIndex);
router.post('/new', homeController.saveProduct);

router.get('/new', homeController.AddNewProduct);
router.get("/:id", homeController.FindOneProduct);
router.get('/', homeController.ShowAllProducts);

module.exports = router;