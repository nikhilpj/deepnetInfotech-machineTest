const express = require('express')

const router = express.Router()

const userController= require('../Controller/userController')

router.post('/addcategory',userController.postCategory)

router.post('/addproduct',userController.postProduct)

router.get('/categories',userController.getCategories)

router.post('/add/subcategory/:id',userController.postSubCategory)

router.get('/getdetail/:id',userController.getDetails)

router.get('/getproducts/:id',userController.getProducts)


module.exports = router