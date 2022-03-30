const mongoose = require('mongoose');

//schema
const productSchema = mongoose.Schema({ 
    code: String,
    description: String,
    price: Number,      
}); 

module.exports = mongoose.model('Product', productSchema);
