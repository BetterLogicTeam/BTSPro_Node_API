const userSchema = require('../models/userModel')


exports.getUser = async (req, res) => {
    try {
        res.status(200).send("user is herer 👥")

    } catch (error) {
        console.error("error while get user", error);
    }
}


exports.open_marketplace = async (req, res) => {
    try {
        const data = new userSchema(req.body);
        await data.save();
        res.status(201).send({
            success: true,
            msg: "Data Store Successfuly"
        })

    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.sell_marketplace_history = async (req, res) => {
    try {
        const data = await userSchema.find();
        let SellArray = []
        for (let i = 0; i < data.length; i++) {
            let sellCondition = data[i].isOnAuction

            if (sellCondition == 0) {
                SellArray = [...SellArray, data[i]]
            }
        }
        if (Object.keys(SellArray).length !== 0) {
            res.status(201).send({
                data: SellArray,
                success: true,

            })
        } else {
            res.status(200).send({
                data: [],
                success: false,

            })
        }

    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.OnAuction_marketplace_history = async (req, res) => {
    try {
        const data = await userSchema.find();
        let OnAuctionArray = []
        for (let i = 0; i < data.length; i++) {
            let sellCondition = data[i].isOnAuction

            if (sellCondition == 1) {
                OnAuctionArray = [...OnAuctionArray, data[i]]
            }
        }
        if (Object.keys(OnAuctionArray).length !== 0) {
            res.status(201).send({
                data: OnAuctionArray,
                success: true,

            })
        } else {
            res.status(200).send({
                data: [],
                success: false,

            })
        }

    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.sell_and_auction_history = async (req, res) => {
    try {
        const data = await userSchema.find();
        
       
        if (Object.keys(data).length !== 0) {
            res.status(201).send({
                data: data,
                success: true,

            })
        } else {
            res.status(200).send({
                data: [],
                success: false,

            })
        }

    } catch (error) {
        console.error("error while get user", error);
    }
}