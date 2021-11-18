const Product = require('../models/productModel')



exports.getProductID = async (req,res) => {

    const { productid } = req.body
    try{
    const product = await Product.findOne(productid)
        res.status(200).json(product);
    }catch(err) {
        res.status(400).json(err)
    }
}