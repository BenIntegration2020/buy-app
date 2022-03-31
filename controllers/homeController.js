// exports.getIndex = (req, res)=>{
//     res.render('index');
// };

//ajout nouveau produit
const Product = require("../models/product");

// exports.getIndex = (req, res)=>{
//     res.render("index");
// }

exports.AddNewProduct = (req, res) => {
  res.render("new");
};

exports.saveProduct = (req, res) => {
  const productCode = req.body.productCode;
  const description = req.body.description;
  const price = req.body.price;

  const newProduct = new Product({
    productCode: productCode,
    description: description,
    price: price,
  });
  newProduct
    .save()
    .then(() => {
      res.render("new", {

      });
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.FindOneProduct = (req, res) => {
  const searchById = { _id: req.params.id };
  Product.findById(searchById)
    .then((product) => {
      res.send(product);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.ShowAllProducts = (req, res) => {
  Product.find({})
    .then((products) => {
      res.render("index", { products: products });
    })
    .catch((error) => {
      console.log(error);
    });
};
