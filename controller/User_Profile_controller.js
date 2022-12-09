const User_profile = require('../models/User_profile')
const userSchema = require('../models/userModel')
const user_Collection = require('../models/Create_NFT')



exports.create_user_profile = async (req, res) => {
    try {

        let {
            address
        } = req.body;
        let userData = await User_profile.findOne({
            address
        });
        if (userData == null) {
            const data = new User_profile({
                ...req.body,
                image: req.file.originalname
            });
            await data.save();
            res.status(201).send({
                success: true,
                msg: "Thank you for registration"
            })
        } else {
            res.status(201).send({
                success: false,
                msg: "User already exist"
            })
        }

    } catch (error) {
        console.error("error while get user", error);
    }
}


exports.update_user_profile = async (req, res) => {


    const update = {
        username: req.body.username,
        email: req.body.email,
        bio: req.body.bio,
        image: req.file.originalname,
        address: req.body.address,
    }
    const {
        address
    } = req.query




    const updatedDocument = await User_profile.findOneAndUpdate(address, {
        $set: update
    }, {
        new: true
    });
    console.log("updatedDocument", updatedDocument);
    return res.status(200).send(updatedDocument);


};

exports.get_user_profile = async (req, res) => {
    try {
        let User = await User_profile.find()
        console.log("User", User);
        let {
            address
        } = req.query

        let data = await User_profile.findOne({
            address
        })
        if (data == null) {
            res.status(200).send({
                data: null,
                success: false,
                msg: "User Data not found"
            })
        } else {
            res.status(200).send({
                data: data,
                success: true,
                msg: "User Data found "
            })

        }

    } catch (error) {
        console.error("error while get user", error);
    }
}



exports.Collection_NFT = async (req, res) => {
    try {

        const data = new user_Collection({
            image: req.file.originalname
        });
       let resdata= await data.save();
        res.status(201).send({
            data :resdata,
            success: true,
            msg: "NFT Created"
        })
       
        

    } catch (error) {
        console.error("error while get user", error);
    }
}
