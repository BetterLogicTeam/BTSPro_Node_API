const User_profile = require('../models/User_profile')
const userSchema = require('../models/userModel')

exports.update_auction_status = async (req, res) => {
    try {

        let {tokenid}=req.body
        const Find_ID = await userSchema.find({tokenId:tokenid});
      
        if (Find_ID.length !==0) {
            const Delete_token_id = await userSchema.deleteOne({tokenId:tokenid});
            res.status(201).send({
                data: Delete_token_id,
                success: true,
                msg: "Data deleted"
            })
        } else {
            res.status(200).send({
                data: [],
                success: false,
                msg: " Not Found"
            })
        }

    } catch (error) {
        console.error("error while get user", error);
    } 
}


exports.update_sell_status = async (req, res) => {
    try {

        let {tokenid}=req.body
        const Find_ID = await userSchema.find({tokenId:tokenid});
      
        if (Find_ID.length !==0) {
            const Delete_token_id = await userSchema.deleteOne({tokenId:tokenid});
            res.status(201).send({
                data: Delete_token_id,
                success: true,
                msg: "Data deleted"
            })
        } else {
            res.status(200).send({
                data: [],
                success: false,
                msg: " Not Found"
            })
        }

    } catch (error) {
        console.error("error while get user", error);
    } 
}