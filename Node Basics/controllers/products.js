const Product = require("../models/product");
exports.getAddProduct = (req, res, next) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true,
    path: "/admin/add-product",
  });
};

exports.postAddProduct = (req, res, next) => {
  // products.push({ title: req.body.title });
  const product = new Product(req.body.title);
  product.save();
  res.redirect("/");
};

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "shop.html"));
  Product.fetchAll((products) => {
    res.render("shop", {
      prods: products,
      pageTitle: "SHop",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
      path: "/",
    });
  });
};
