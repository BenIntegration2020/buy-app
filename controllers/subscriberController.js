const Subscriber = require('../models/subscriber');

module.exports = {
    saveSubscriber: (req, res, next)=>{
        const newSubscriber = new Subscriber({
            userName: req.body.userName,
            email: req.body.email,
            password: req.body.password,
          });
          newSubscriber
            .save() // method
            .then(subscriber => {
                res.locals.subscriber = subscriber;
                next();
            })
            .catch(error => {
              next(error);
            });
    },

    renderSignin: (req, res) => {
      res.render("user/signin");
    }

}