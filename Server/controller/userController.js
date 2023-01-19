const {
    query
} = require('express');
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
        let {
            category
        } = req.query
        if (category == "All") {
            const data = await userSchema.find({
                isOnAuction: 0
            });

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
        } else {
            const data = await userSchema.find({
                category: category,
                isOnAuction: 0
            });

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
        }


    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.OnAuction_marketplace_history = async (req, res) => {
    try {
        let Array = ["Cartoon", "3D"]
        let {
            category
        } = req.query;
        if (category == "All") {


            const data = await userSchema.find({
                isOnAuction: 1
            });
            console.log("category", data);

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
        } else {
            console.log("category", Array);
            let OnAuctionArray = []

            // Array.forEach(async (items, index) => {
            //     const data = await userSchema.find({
            //         category: items,
            //         isOnAuction: 1
            //     });


            // });

            // console.log("category", OnAuctionArray);

            for (let i = 0; i <= Array.length; i++) {
                let data = await userSchema.find({
                    category: Array[i],
                    isOnAuction: 1
                });
                console.log("DAta", data);

                // if (sellCondition == 1) {
                OnAuctionArray = [...OnAuctionArray, data[i]]
                // }
            }

            console.log("OnAuctionArray", OnAuctionArray);

            // if (Object.keys(data).length !== 0) {
            //     res.status(201).send({
            //         data: data,
            //         success: true,

            //     })
            // } else {
            //     res.status(200).send({
            //         data: [],
            //         success: false,

            //     })
            // }
        }

    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.sell_and_auction_history = async (req, res) => {
    try {

        let {
            category
        } = req.query


        if (category == "All") {

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
        } else {
            const data = await userSchema.find({
                category: category
            });


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
        }


    } catch (error) {
        console.error("error while get user", error);
    }
}

exports.sell_and_auction_history_address = async (req, res) => {
    try {
        let {
            useraddress
        } = req.query

        const data = await userSchema.find({
            useraddress: useraddress
        });


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


exports.Get_New_NFTs = async (req, res) => {
    try {
        let {
            category
        } = req.query
        if (category == "All") {
            const data = await userSchema.find();
            // console.log("Data",data);
            let SellArray = []


            for (let i = 0; i < data.length; i++) {
                let sellCondition = data[i].edate
                let CurrentDate = new Date()
                if (sellCondition == undefined) {
                    
                } else {
                    // console.log("Data", sellCondition);

                    // console.log("sellCondition", CurrentDate.getMonth() == sellCondition.getMonth() && CurrentDate.getDate() == sellCondition.getDate());
                    if (CurrentDate.getMonth() == sellCondition.getMonth() && CurrentDate.getDate() == sellCondition.getDate()) {

                        SellArray = [...SellArray, data[i]]

                        // console.log("SellArray");
                    }

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
        } else {
            const data = await userSchema.find({
                category: category
            });
            let SellArray = []
            for (let i = 0; i < data.length; i++) {
                let sellCondition = data[i].edate
                let CurrentDate = new Date()
                // console.log("sellCondition", CurrentDate.getMonth()==sellCondition.getMonth() && CurrentDate.getDate()==sellCondition.getDate());
                if (CurrentDate.getMonth() == sellCondition.getMonth() && CurrentDate.getDate() == sellCondition.getDate()) {

                    SellArray = [...SellArray, data[i]]

                    // console.log("SellArray");
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
        }


    } catch (error) {
        console.error("error while get user", error);
    }
}