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
      req.flash('success_msg', 'Product successfully added');
      res.redirect("/");
    })
    .catch((error) => {
      req.flash('error_msg', `Failed to add product because ${error.message}`);
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
    req.flash('success_msg', 'Product successfully updated');
    res.redirect('/');
  })
  .catch(error => {
    req.flash(`error_msg', 'Failed to update product because ${error.message}`);
    res.redirect('/');
  });
};

exports.deleteProduct = (req, res) => {
  let searchQuery = { _id : req.params.id};
  Product.deleteOne(searchQuery)
  .then(product => {
    req.flash('success_msg', 'Product successfully deleted');
    res.redirect('/');
  })
  .catch(error => {
    req.flash(`error_msg', 'Failed to delete product because ${error.message}`);
    console.log(error);
    res.redirect('/');
  });
};

exports.getSearchProduct = (req, res) => {
  res.render('search', {
    productCode : undefined
  });
};

exports.displaySearchProduct = (req, res) => {
  const productCode = req.query.productCode;
  console.log(productCode);
  
    Product.findOne({ productCode: productCode })
    .then((product) => {
      if (!!product) {
      res.render('search', {
        productCode: product.productCode,
        description: product.description,
        price: product.price
      });
    } else {
      req.flash('error_msg', `Could not find product with code: ${productCode}`);
      res.redirect('/search');
    }
    })
    .catch(error => {
      console.log(error);
      res.redirect('search');
    });
};


