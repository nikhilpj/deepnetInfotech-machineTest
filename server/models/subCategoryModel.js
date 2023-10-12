const mongoose = require('mongoose')

const schema = mongoose.Schema

const subCategorySchema = new schema({
    parentId:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    }
})

const subCategory = mongoose.model("subCategory",subCategorySchema)

module.exports = subCategory