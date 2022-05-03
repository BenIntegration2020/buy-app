const User = require('../models/user');
const passport = require('passport');

module.exports = {

    saveUser: (req, res, next)=>{
        if (req.skip) next();
        let userParams = {
            userName: req.body.userName,
            email: req.body.email
          };
          let newUser = new User(userParams);
          User.register(newUser, req.body.password, (error, user)=>{
            if(error){
                console.log(error);
                res.locals.redirect = '/signup';
                next();
            }
            else{
                res.locals.redirect = '/';
                next();
            }
          });
    },


    authenticate: passport.authenticate('local', {
      failureRedirect: "/signin",
      failureFlash: "You cannot connect",
      successRedirect: "/",
      successFlash: "You are logged in"
  }),

  
    // showUserNav: (req,res) =>{
    //   res.locals.user = req.user;
    // },


    renderSignin: (req, res) => {
        res.render("user/signin");
      },
    showSignup: (req, res) => {
        res.render('user/signup');
      }
}

//fonction header = menu affiché lorsque user authentifié
//fonction isAuthentificated() req.isauthentificated
