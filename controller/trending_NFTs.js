const User_profile = require('../models/User_profile')
const userSchema = require('../models/userModel')
const Tranding_Market_NFTs = require('../models/tranding_NFTS')


exports.trending_address_marketplace = async (req, res) => {
    try {

        const Address_trending = await userSchema.find();
        // const { address } = Get_Profile
        let Seller_Address = []
        Address_trending.forEach((element) => {
            Seller_Address[element.useraddress] = (Seller_Address[element.useraddress] || 0) + 1
        });

        let TopSeller = []
        Object.keys(Seller_Address).forEach((key) => {


            TopSeller = [...TopSeller, {
                "User_Address": key,
                "trendcount": Seller_Address[key]
            }]
            //    TopSeller["trendcount"]=Seller_Address[key]

        });

        let Top_Seller_Array = TopSeller.sort((a, b) => a.trendcount - b.trendcount)
        Top_Seller_Array = Top_Seller_Array.reverse()
        // console.log(Top_Seller_Array)
        // console.log("Address_trending", TopSeller);
        if (Object.keys(Top_Seller_Array).length !== 0) {
            res.status(201).send({
                data: Top_Seller_Array,
                success: true,
                msg: "Top Seller"
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



exports.trending_NFTs = async (req, res) => {
    try {

        const data = new Tranding_Market_NFTs(req.body);
        let {
            tokenId,
            nftContract
        } = data;
        const Address_trending = await Tranding_Market_NFTs.find({
            tokenId
        });

        if (Address_trending.length) {
            let {
                count
            } = Address_trending[0]
    

            let update = {
                useraddress: data.useraddress,
                nftContract: data.nftContract,
                tokenId: data.tokenId,
                count: Number(count + 1)

            }
            const updatedDocument = await Tranding_Market_NFTs.findOneAndUpdate({
                nftContract: nftContract,
                tokenId: tokenId
            }, {
                $set: update
            }, {
                new: true
            });

            res.status(200).send({
                data: updatedDocument,
                success: true,
                msg: "Upadete Tranding"
            })

        } else {
            await data.save();
            res.status(201).send({
                success: true,
                msg: "Tranding Store Successfuly"
            })

        }


    } catch (error) {
        console.error("error while get user", error);
    }
}


exports.get_trending_NFTs = async (req, res) => {
    try {


        const Address_trending = await Tranding_Market_NFTs.find().sort({
            "count": -1
        }).limit(4);

        if(Address_trending.length){
            res.status(200).send({
                data: Address_trending,
                success: true,
                msg: "Upadete Tranding"
            })
        }else{
            res.status(200).send({
                data: [],
                success: false,
                msg: "No Found Tranding"
            })
        }



    } catch (error) {
        console.error("error while get user", error);
    }
}



exports.update_tranding = async (req, res) => {
    try {

        let {tokenId}=req.body
        const Find_ID = await Tranding_Market_NFTs.find({tokenId:tokenId});
       
    //   console.log("Find_ID",tokenId);
        if (Find_ID.length !==0) {
            const Delete_token_id = await Tranding_Market_NFTs.deleteOne({tokenId:tokenId});
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
