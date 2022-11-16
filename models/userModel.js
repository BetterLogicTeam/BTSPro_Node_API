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
    
})



const userSchema = mongoose.model("Market_Place", schema);
module.exports = userSchema;