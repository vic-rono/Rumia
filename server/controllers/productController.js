const Product = require('../models/productModel')





exports.getAllProducts = async (req, res) => {
    try {
      const products = await Product.find({});
      return res.status(200).json(products);
    } catch (error) {
      return res.status(400).json({ message: err });
    }
  };
  

exports.addReview = async (req,res) => {
  const { review, productid, currentUser } = req.body
  try{
    const product = await Product.findById({ _id: productid})

    const Review = {
      name : currentUser.name,
      userid: currentUser._id,
      rating: review.rating,
      comment: review.comment
    }

    

    product.reviews.push(Review)
    let rating = product.reviews.reduce((acc,x)=> acc + x.rating, 0) /product.reviews.length
    product.rating = rating
    
    product.save(err =>{
      if(err){
        return res.status(400).json('Something Went Wrong')
      } else {
        return res.status(200).json('Review Submitted Successfully')
      }
    })
  } catch(err){
    return res.status(400).json({ message: err });
  }

}

exports.deleteProduct = async (req, res) => {
  const { productid } = req.body;
  try {
    const product = await Product.findOneAndDelete(productid);
    res.status(200).json(product);
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.addProduct = async (req, res) => {
  const { product } = req.body;
  try {
    const prooduct =  new Product({
      name : product.name,
      price : product.price,
      description : product.description,
      countInStock: product.countInStock,
      image: product.image,
      category: product.category,
    })
   const product1 = await prooduct.save()
    res.status(200).json(product1);
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.updateProduct = async (req, res) =>{
  const { productid, updatedproduct } = req.body

    try{
      const update = new Product({
        name: updatedproduct.name,
        price: updatedproduct.price,
        category: updatedproduct.category,
        description: updatedproduct.description,
        countInStock: updatedproduct.countInStock,
        image: updatedproduct.image
      })
  
    
    const Update = await update.findByIdandUpdate(productid)
      res.status(200).json(Update);
    }catch(err){
      return res.status(400).json(err);
    }

}

