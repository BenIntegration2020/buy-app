const path = require('path');

// exports.redirectIndex = (request, response)=>{
//     response.redirect("/home");
// }

exports.sendIndex = (req, res)=>{
    res.render('index');
}