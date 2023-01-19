const mongoose = require("mongoose");

const schema = mongoose.Schema({
    address:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true
    },
   
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    edate:{
        type:Date,
    },
    
    
})
const Biding_History = mongoose.model("Biding_History", schema);
module.exports = Biding_History;