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
    nftName:{
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
const Latest_Bids = mongoose.model("Latest_Bids", schema);
module.exports = Latest_Bids;