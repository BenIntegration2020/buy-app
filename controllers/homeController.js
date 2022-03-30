// exports.getIndex = (req, res)=>{
//     res.render('index');
// };


//ajout nouveau produit
const Product = require('../models/product');

// exports.getIndex = (req, res)=>{
//     res.render("index");
// }

exports.AddNewProduct = (req, res)=>{
    res.render("new");
}

exports.saveProduct = (req, res)=>{
    const code = req.body.code;
    const description = req.body.description;
    const price = req.body.price;
   
    const newProduct = new Product({code: code, description: description, price: price});
    newProduct.save()
    .then(result=> {res.render("index")})
    .catch(error=>{
        console.log(error)
    });

}

// exports.FindOneProduct = (req, res)=>{
// const searchById = {_id: req.params.id};
// Product.findById(searchById).then(product=>{res.send(product)}).catch(
//     error=>{console.log(error);}
// )};

exports.allProducts = (req, res)=>{
    Product.find({}).then(product=>{
        res.render('index', {products: product});
    }).catch(error=>{
        console.log(error);
    })
}