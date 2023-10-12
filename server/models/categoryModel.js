const mongoose = require('mongoose')

const schema = mongoose.Schema

const categorySchema = new schema({
    name:{
        type:String,
        required:true
    }
})

const category = mongoose.model("category",categorySchema)

module.exports = category