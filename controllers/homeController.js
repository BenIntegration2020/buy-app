//ajout nouveau produit
const Product = require("../models/product");

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

exports.editUser = (req, res) => {
  const searchById = { _id: req.params.id };
  Product.findById(searchById)
    .then((product) => {
      res.render('edit', { product: product });
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

exports.updateProduct = (req, res) => {
  let searchQuery = {_id : req.params.id};
  Product.updateOne(searchQuery, {$set: {
    productCode: req.body.productCode,
    description: req.body.description,
    price: parseFloat(req.body.price),
  }})
  .then(product => {
    res.redirect('/');
  })
  .catch(error => {
    res.redirect('/');
  });
};

exports.deleteProduct = (req, res) => {
  console.log('delete');
  let searchQuery = { _id : req.params.id};
  Product.deleteOne(searchQuery)
  .then(product => {
    console.log(product);
    res.redirect('/');
  })
  .catch(error => {
    console.log(error);
    res.redirect('/');
  });
};
