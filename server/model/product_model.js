const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    id: String,
    index: Number,
    name: String,
    info: String,
    price: Number,
    imageType: String,
    picture: String
  },
  {
    collection: "product"
  }
);

module.exports = mongoose.model("product", productSchema);

// 單筆新增範例
//   var kittySchema = new mongoose.Schema({
//     name: String
//   }, {
//     collection: 'product'
//   });
//   var Kitten = mongoose.model('product', kittySchema);
//   var fluffy = new Kitten({ name: 'fluffy' });
//   fluffy.save(function (err, fluffy) {
//     if (err) return console.error(err);
//   });


// 多筆新增範例
// // define Schema
// var BookSchema = mongoose.Schema({
//   name: String,
//   price: Number,
//   quantity: Number
// });

// // compile schema to model
// var Book = mongoose.model("Book", BookSchema, "bookstore");

// // documents array
// var books = [
//   { name: "Mongoose Tutorial", price: 10, quantity: 25 },
//   { name: "NodeJS tutorial", price: 15, quantity: 5 },
//   { name: "MongoDB Tutorial", price: 20, quantity: 2 }
// ];

// // save multiple documents to the collection referenced by Book Model
// Book.collection.insert(books, function(err, docs) {
//   if (err) {
//     return console.error(err);
//   } else {
//     console.log("Multiple documents inserted to Collection");
//   }
// });