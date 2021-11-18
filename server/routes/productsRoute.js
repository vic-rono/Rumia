const express = require("express")
const router = express.Router()
const { getAllProducts, addReview, deleteProduct, addProduct, updateProduct } = require('../controllers/productController')
const { getProductID } = require('../controllers/productIdController')


router.get("/getallproducts" , getAllProducts)
router.get("/getproductbyid" , getProductID)
router.post("/addreview" , addReview)
router.post("/deleteproduct" , deleteProduct)
router.post("/addproduct" , addProduct)
router.post("/updateproduct" , updateProduct)

module.exports = router