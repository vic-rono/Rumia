const express = require("express")
const router = express.Router()
const { newUser ,loginUser, updateUser, getAllUsers, deleteUser } = require('../controllers/userController')



router.post("/register" , newUser)
router.post("/login" , loginUser)
router.post("/update" , updateUser)
router.get("/getallusers", getAllUsers)
router.post("/deleteuser", deleteUser)

module.exports = router

