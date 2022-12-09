const mongoose = require("mongoose");

const schema = mongoose.Schema({
    
    image:{
        type:String,
        required:true
    },
     
    
})



const user_Collection = mongoose.model("user_Collection", schema);
module.exports = user_Collection;