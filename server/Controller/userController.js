const categoryCollection = require("../models/categoryModel");
const productCollection = require("../models/productModel")
const cloudinaryModule = require("cloudinary");
const cloudinary = cloudinaryModule.v2;
require("dotenv").config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
module.exports = {
  postCategory: async (req, res) => {
    try {
      console.log("data to add category", req.body);
      const data = await categoryCollection.create({
        name: req.body.category,
      });
      return res
        .status(200)
        .json({ data: data, message: "data created successfully" });
    } catch (error) {
      console.log("error ", error);
      return res.status(500).json({ message: "internal server error" });
    }
  },

  postProduct: async (req, res) => {
    try {
        console.log("data in adding products", req.body);
        const { name, price, category, image } = req.body;
        if (image) {
          const uploadResponse = await cloudinary.uploader.upload(image, {
            upload_preset: "products",
            crop: "fill",
            gravity: "auto",
          });
          if (uploadResponse) {
            await productCollection.create({
              name: name,
              price:price,
              category:category,
              image: uploadResponse,
            });
          }
        }
       
          res.status(200).json({message:"product data inserted to database"})
    } catch (error) {
        console.log("error ",error)
        res.status(500).json({message:"internal server error"})
    }
  
  },

  getCategories:async(req,res)=>{
    try {
        const data = await categoryCollection.find({})
        res.status(200).json({data:data,message:"data sent successfully"})
    } catch (error) {
        console.log("error",error)
        res.status(500).json({message:"internal server error"})
    }
    
  }
};
