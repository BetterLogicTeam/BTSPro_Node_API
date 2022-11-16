const express = require("express");
const bodyParser = require("body-parser");
const upload = require("../middleware/multer")
// import router 
const {getUser,open_marketplace,sell_marketplace_history,OnAuction_marketplace_history,sell_and_auction_history} = require("../controller/userController")
const {create_user_profile,get_user_profile,update_user_profile} = require('../controller/User_Profile_controller')
const {trending_address_marketplace} =require('../controller/trending_NFTs')
const {update_auction_status,update_sell_status} =require('../controller/update_status')

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/getUser").get(getUser)
router.route("/sell_marketplace_history").get(sell_marketplace_history)
router.route("/OnAuction_marketplace_history").get(OnAuction_marketplace_history)
router.route("/open_marketplace").post(open_marketplace)
router.route("/sell_and_auction_history").get(sell_and_auction_history)


// /------------  update_user_profile----------------------------------------------------

router.route("/create_user_profile").post(upload.single("profile"),create_user_profile)
router.route("/update_user_profile").post(upload.single("profile"),update_user_profile)

router.route("/get_user_profile").get(get_user_profile)
router.route("/trending_address_marketplace").get(trending_address_marketplace)

// /------------  update_status----------------------------------------------------

router.route("/update_auction_status").post(update_auction_status)
router.route("/update_sell_status").post(update_sell_status)






module.exports = router;