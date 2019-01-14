const Product = require("../model/product_model");

module.exports = {
  getProductsHandler: () => {
    return new Promise((resolve, reject) => {
      Product.find({}, (err, data) => {
        if (err) reject(new Error(err));
        if (data === null) {
          resolve(null);
        } else {
          resolve(data);
        }
      });
    });
  }
};
