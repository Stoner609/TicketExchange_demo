const ProductService = require("../service/product_service");

module.exports = {
  /* 撈產品列表資料 */
  productList: async (req, res) => {
    try {
      let Productlist = await ProductService.getProductList();
      res.json({
        Productlist,
        Description: "產品列表"
      });
    } catch (error) {
      res.json(error.message);
    }
  }
};
