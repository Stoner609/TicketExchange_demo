const ProductService = require("../service/product_service");
const returnClass = require("../rule/returnClass");

module.exports = {
  /* 撈產品列表資料 */
  productList: async (req, res) => {
    let lo_returnClass = new returnClass();
    lo_returnClass.description = "產品列表";

    try {
      let Productlist = await ProductService.getProductsHandler();
      lo_returnClass = {
        ...lo_returnClass,
        Productlist
      };
    } catch (error) {
      lo_returnClass = lo_returnClass.errorHandler(error);
    }

    res.status(200).json(lo_returnClass);
  }
};
