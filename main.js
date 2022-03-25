const express = require('express');
const app = express()
const path = require('path');
const http = require('http');
// const expressLayouts = require('express-ejs-layouts');
const dotenv = require('dotenv');
dotenv.config({path: './configuration.env'});


//public
// app.use(express.static(path.resolve(__dirname, "/public")));
// app.use(express.static('public'))

//views
// app.use(expressLayouts);
app.set('views', path.resolve(__dirname+'/views'));
app.set('view engine', 'ejs');

//routes
const controller = require('./controllers/homeController');
app.get("/", controller.sendIndex);

//définir le port

const port = process.env.PORT || 5000;
server.listen(port, ()=>{
    console.log("serveur listening on port 3000");
});
