const express = require('express')

const router = express.Router()

const userController= require('../Controller/userController')

router.post('/addcategory',userController.postCategory)

router.post('/addproduct',userController.postProduct)

router.get('/categories',userController.getCategories)

module.exports = router