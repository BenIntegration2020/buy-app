const express = require("express");
const router = express.Router();
const homeController = require("../controllers/homeController");
const userController = require("../controllers/userController");
const User = require("../models/user.js");

router.post("/new", homeController.saveProduct);

router.put("/edit/:id", homeController.updateProduct);

router.delete("/delete/:id", homeController.deleteProduct);

router.get("/new", homeController.AddNewProduct);
router.get("/search", homeController.getSearchProduct);
router.get("/searchProduct", homeController.displaySearchProduct);
router.get("/edit/:id", homeController.editUser);
router.get("/", homeController.ShowAllProducts);

router.get("/signup", userController.showSignup);

router.get("/signin", userController.renderSignin);
router.post("/signin", userController.saveUser, userController.renderSignin);
router.get("/", homeController.getIndex);
router.post("/connexion", userController.authenticate);
router.get("/logout", function (req, res) {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
