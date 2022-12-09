const mongoose = require("mongoose");

const schema = mongoose.Schema({
    useraddress:{
        type:String,
        required:true,
    },
    itemId:{
        type:String,
        required:true
    },
    nftContract:{
        type:String,
        required:true
    }, 
     tokenId:{
        type:String,
        required:true
    }, 
     owner:{
        type:String,
        required:true
    },
      price:{
        type:String,
        required:true
    },  
    sold:{
        type:String,
        required:true
    }, 
    isOnAuction:{
        type:String,
        required:true
    }, 
     bidEndTime:{
        type:String,
        required:true
    }, 
     name:{
        type:String,
        required:true
    },
    url:{
        type:String,
        required:true
    },
    txn:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },  
    count:{
        type:Number,
        default:0
    },
    
})
const Tranding_Market_NFTs = mongoose.model("Tranding_Market_NFTs", schema);
module.exports = Tranding_Market_NFTs;