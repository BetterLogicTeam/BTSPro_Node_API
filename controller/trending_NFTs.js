const User_profile = require('../models/User_profile')
const userSchema = require('../models/userModel')

exports.trending_address_marketplace = async (req, res) => {
    try {

        const Address_trending = await userSchema.find();
        // const { address } = Get_Profile
        let Seller_Address = []
        Address_trending.forEach((element) => {
            Seller_Address[element.useraddress] = (Seller_Address[element.useraddress] || 0) + 1
        });

        let TopSeller=[]
        Object.keys(Seller_Address).forEach((key) => {
          

           TopSeller=[...TopSeller,{"User_Address":key,"trendcount":Seller_Address[key]}]
        //    TopSeller["trendcount"]=Seller_Address[key]

        });

        let Top_Seller_Array=TopSeller.sort((a,b) =>  a.trendcount - b.trendcount )
        Top_Seller_Array=Top_Seller_Array.reverse()
        console.log(Top_Seller_Array)
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



exports.trending_marketplace = async (req, res) => {
    try {

        const Address_trending = await userSchema.find();
        // const { address } = Get_Profile
        let Seller_Address = []
        Address_trending.forEach((element) => {
            Seller_Address[element.useraddress] = (Seller_Address[element.useraddress] || 0) + 1
        });

        let TopSeller=[]
        Object.keys(Seller_Address).forEach((key) => {
    

           TopSeller=[...TopSeller,{"User_Address":key,"trendcount":Seller_Address[key]}]
        //    TopSeller["trendcount"]=Seller_Address[key]

        });

        let Top_Seller_Array=TopSeller.sort((a,b) =>  a.trendcount - b.trendcount )
        Top_Seller_Array=Top_Seller_Array.reverse()
       
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