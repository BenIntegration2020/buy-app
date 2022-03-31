/********************
 *      Imports     *
 ********************/
const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./configuration.env" });

const Product = require('./models/product');
const methodOverride = require('method-override');
const controller = require("./controllers/homeController");
const routes = require('./routes/routes');

/*********************
 *  Base de Données  *
 *********************/
const DATABASE_LOCAL = process.env.DATABASE_LOCAL;
mongoose.connect(DATABASE_LOCAL, {
  useNewUrlParser: true,
});

app.use(methodOverride('_method')); 
/***********************
 * Fichiers Statiques  *
 ***********************/
// app.use(express.static(path.resolve(__dirname, "/public")));
app.use(express.static("public"));

/*********************
 *  Views/Middleware *
 *********************/
app.use(expressLayouts);
app.set("layout", "./layouts/myLayouts");
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.set("views", path.resolve(__dirname + "/views"));
app.set("view engine", "ejs");

/*********************
 *       Routes      *
 *********************/
app.use(routes);


/*********************
 *         Port      *
 *********************/

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serveur listening on port ${port}`);
});
