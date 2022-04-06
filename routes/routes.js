const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.post('/new', homeController.saveProduct);

router.put('/edit/:id', homeController.updateProduct);

router.delete('/delete/:id', homeController.deleteProduct);

router.get('/new', homeController.AddNewProduct);
router.get('/search', homeController.getSearchProduct);
router.get('/searchProduct', homeController.displaySearchProduct);
router.get('/edit/:id', homeController.editUser);
router.get('/', homeController.ShowAllProducts);

module.exports = router;