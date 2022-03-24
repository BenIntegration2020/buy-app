const express = require('express');
const app = express()
const path = require('path');
const http = require('http');
// const expressLayouts = require('express-ejs-layouts');


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
app.listen(3000, ()=>{
    console.log('server is 3000');
})
