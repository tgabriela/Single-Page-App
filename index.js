const express = require("express")
const router = express.Router()
const userController = require("./controllers/users")
const authController = require("./controllers/atUser")
const productController = require("./controllers/products")

// Users //
router.use("/users", userController.getAllUsers)
router.use("/login/:user", userController.getUserByEMail)
router.post("/register/:user", authController.addUser)


// Products //
router.use("/products", productController.getAllProducts)
router.use("/update/:id", productController.getProductById)
router.use("/updateProduct/:id", productController.updateProduct)
router.post("/newProducts/:product", productController.addProduct)
router.delete("/deleteProduct/:id", productController.deleteProduct)

module.exports = router
