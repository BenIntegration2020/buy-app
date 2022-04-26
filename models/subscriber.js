const mongoose = require("mongoose");
const subscriberSchema = new mongoose.Schema({
    userName: {
        type: String,
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
    min: [10000, "password too short"],
    max: 99999
    }
},
{
    timestamps: true 
}
  );

subscriberSchema.methods.getInfo = function() {
    return `User Name: ${this.userName} Email: ${this.email} password: ${this.password}`;
   };

module.exports = mongoose.model("Subscriber", subscriberSchema);