const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const User = require("../models/user.js");


/* ---------------------------- */
/*    HOMECONTROLLER ROUTES     */
/* ---------------------------- */


router.get("/", homeController.ShowAllProducts);
router.get("/", homeController.getIndex);

router.get("/new", homeController.AddNewProduct);
router.post("/new", homeController.saveProduct);

router.put("/edit/:id", homeController.updateProduct);
router.get("/edit/:id", homeController.editUser);

router.delete("/delete/:id", homeController.deleteProduct);

router.get("/search", homeController.getSearchProduct);
router.get("/searchProduct", homeController.displaySearchProduct);


/* ---------------------------- */
/*    USERCONTROLLER ROUTES     */
/* ---------------------------- */
 
router.get("/signup", userController.showSignup);
router.get("/signin", userController.renderSignin);
router.post("/signin", userController.saveUser, userController.renderSignin);

router.post("/connexion", userController.authenticate);
router.get("/logout", userController.logout);

module.exports = router;
