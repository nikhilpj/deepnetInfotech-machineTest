const mongoose = require('mongoose')

const schema = mongoose.Schema

const productSchema = new schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:Object,
        required:true
    }
})

const product = mongoose.model("product",productSchema)

module.exports = product