const mongoose = require('mongoose')


    const connectDB = mongoose.connect('mongodb://127.0.0.1:27017/deepnetinfotech')
    .then(()=>{
        console.log("database connected")
    }).catch((e)=>{
        console.log("error while connecting to database",e)
    })
    


module.exports = connectDB
