const Bid_History = require('../models/Bid_History')


exports.create_Bid_History = async (req, res) => {
    try {

        // let {
        //     address
        // } = req.body;
        // let userData = await Bid_History.findOne({
        //     address
        // });
        // if (userData == null) {
            console.log("Data",req.body);
            const data = new Bid_History({
                ...req.body
            });
            await data.save();
            res.status(201).send({
                success: true,
                msg: "Data Is Store Successfully"
            })
        // } else {
        //     res.status(201).send({
        //         success: false,
        //         msg: "User already exist"
        //     })
        // }

    } catch (error) {
        console.error("error while get user", error);
    }
}


exports.get_Bid_History = async (req, res) => {
    try {
        let User = await Bid_History.find().limit(10)
        if (User == null) {
            res.status(200).send({
                data: null,
                success: false,
                msg: "Bid History Data not found"
            })
        } else {
            res.status(200).send({
                data: User,
                success: true,
                msg: "Bid History Data found "
            })

        }

    } catch (error) {
        console.error("error while get user", error);
    }
}