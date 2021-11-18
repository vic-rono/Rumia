const mongoose = require("mongoose");

const reviewSchema = new  mongoose.Schema({
    userid: {
      type: mongoose.Schema.Types.ObjectId
    },
    name: {
      type: String,
      required: true
    },
    comment: {
      type: String,
    },
    rating: {
      type: Number,
      required: true
    },
  },
  {
    timeStamps: true,
  });

const productSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    countInStock: {
      type: Number,
      required: true,
    },
    reviews: [reviewSchema],
  },
  {
    timeStamps: true,
  });

const Product = mongoose.model('products', productSchema);

module.exports = Product;
