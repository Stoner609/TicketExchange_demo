const ProductService = require("../service/product_service");
const returnClass = require("../rule/returnClass");

module.exports = {
  /* 撈產品列表資料 */
  productList: async (req, res) => {
    let lo_returnClass = new returnClass('產品列表');

    try {
      const Productlist = await ProductService.getProductsHandler();
      lo_returnClass.successHandler("Products list", {
        Productlist
      })
    } catch (error) {
      lo_returnClass.errorHandler(error);
    }

    res.status(200).json(lo_returnClass);
  }
};
