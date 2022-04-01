const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.post('/new', homeController.saveProduct);

router.put('/edit/:id', homeController.updateProduct);

router.get('/new', homeController.AddNewProduct);
router.get('/edit/:id', homeController.editUser);
router.get('/', homeController.ShowAllProducts);

module.exports = router;