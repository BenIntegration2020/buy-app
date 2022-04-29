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
            }
          })
    },

    authenticate: passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: 'Your login does not work',
        successRedirect: '/',
        successFlash: 'You are now logged in!'
    }),

    renderSignin: (req, res) => {
        res.render("user/signin");
      },
    showSignup: (req, res) => {
        res.render('user/signup');
      }
}

//fonction header = menu affiché lorsque user authentifié
//fonction isAuthentificated() req.isauthentificated
