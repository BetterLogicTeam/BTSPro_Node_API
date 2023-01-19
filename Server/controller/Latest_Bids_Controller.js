const Latest_Bids = require('../models/Latest_Bids')



exports.create_Latest_Bids = async (req, res) => {
    try {

        // let {
        //     address
        // } = req.body;
        // let userData = await Bid_History.findOne({
        //     address
        // });
        // if (userData == null) {
            console.log("Data",req.body);
            const data = new Latest_Bids({
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


exports.get_Latest_Bids = async (req, res) => {
    try {
        let {
            nftName
        } = req.query
        let User = await Latest_Bids.find({
            nftName
        }).limit(10)
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

