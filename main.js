const express = require("express");
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const passport = require ('passport');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');
const LocalStrategy = require('passport-local').Strategy;
const connectFlash = require('connect-flash');
dotenv.config({ path: "./configuration.env" });

const User = require('./models/user');
const Product = require('./models/product');
const methodOverride = require('method-override');
const controller = require("./controllers/homeController");
const routes = require('./routes/routes');


const DATABASE_LOCAL = process.env.DATABASE_LOCAL;
mongoose.connect(DATABASE_LOCAL, {
  useNewUrlParser: true,
});

app.set("layout", "./layouts/myLayouts");
app.set("view engine", "ejs");

app.use(methodOverride('_method')); 
app.use(express.static("public"));
app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use(cookieParser('secretStringForCookies'));
app.use(expressSession({
  secret: 'secretStringForCookies',
  cookie: {
    maxAge: 4000000
  },
  resave: false,
  saveUnitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function (req, res, next) {
  res.locals.user = req.user || null;
  next();
});

app.use(connectFlash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});

app.use(routes);


const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serveur listening on port ${port}`);
});
