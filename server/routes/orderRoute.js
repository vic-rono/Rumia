const express = require("express")
const router = express.Router();
const { placeOrder, getOrdersByUserId, getOrderById, getAllOrders  } = require('../controllers/orderController')

router.post("/placeorder", placeOrder)
router.post("/getordersbyuserid", getOrdersByUserId)
router.post("/getorderbyid", getOrderById)
router.get("/getallorders", getAllOrders)

module.exports = router