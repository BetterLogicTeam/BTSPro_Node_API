const express = require("express");
const bodyParser = require("body-parser");
const upload = require("../middleware/multer")
// import router 
const {getUser,open_marketplace,sell_marketplace_history,OnAuction_marketplace_history,sell_and_auction_history,sell_and_auction_history_address,Get_New_NFTs} = require("../controller/userController")
const {create_user_profile,get_user_profile,update_user_profile,Collection_NFT} = require('../controller/User_Profile_controller')
const {trending_address_marketplace,trending_NFTs,get_trending_NFTs,update_tranding} =require('../controller/trending_NFTs')
const {update_auction_status,update_sell_status,update_Tranding} =require('../controller/update_status')

const router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));
router.use(bodyParser.json());

router.route("/getUser").get(getUser)
router.route("/sell_marketplace_history").get(sell_marketplace_history)
router.route("/OnAuction_marketplace_history").get(OnAuction_marketplace_history)
router.route("/open_marketplace").post(open_marketplace)
router.route("/sell_and_auction_history").get(sell_and_auction_history)
router.route("/sell_and_auction_history_address").get(sell_and_auction_history_address)
router.route("/Get_New_NFTs").get(Get_New_NFTs)




// /------------  update_user_profile----------------------------------------------------

router.route("/create_user_profile").post(upload.single("profile"),create_user_profile)
router.route("/update_user_profile").post(upload.single("profile"),update_user_profile)

router.route("/get_user_profile").get(get_user_profile)
router.route("/trending_address_marketplace").get(trending_address_marketplace)
router.route("/trending_NFTs").post(trending_NFTs)
router.route("/update_tranding").post(update_tranding)


router.route("/get_trending_NFTs").get(get_trending_NFTs)

router.route("/Collection_NFT").post(upload.single("profile"),Collection_NFT)




// /------------  update_status----------------------------------------------------

router.route("/update_auction_status").post(update_auction_status)
router.route("/update_sell_status").post(update_sell_status)
router.route("/update_Tranding").post(update_Tranding)







module.exports = router;