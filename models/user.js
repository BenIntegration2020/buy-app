const mongoose = require("mongoose");
const Subscriber = require("./subscriber");

const userSchema = new mongoose.Schema({
    userName : {
            type: String,
            trim : true,
            required: true
        },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    },

    subscriberAccount : {type: mongoose.Schema.Types.ObjectId, ref: "Subscriber"},
},    
    {
    timestamps: true
});

userSchema.methods.getInfo = function() {
    return `User Name: ${this.userName} Email: ${this.email} password: ${this.password}`;
   };

userSchema.pre("save", function(next){
    const user = this;
    if(user.subscriberAccount === undefined){
        Subscriber.findOne({email: user.email})
        .then(subscriber=>{
            user.subscriberAccount = subscriber;
            next();
        })
        .catch(error=>{
            next(error);
        })

    }
    else{
        next();
    }

});

// userSchema.plugin(passportLocalMongoose, {usernameField: "email"})
module.exports = mongoose.model("User", userSchema);