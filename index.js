const express = require("express");
const cors = require("cors");
const Moralis = require("moralis").default;
const { EvmChain } = require("@moralisweb3/evm-utils");
const path = require('path')
// import db connection
const  fs = require('fs')

const dbConnection = require("./connection/db")
// import router
const router = require("./router/router")
require('dotenv').config()
const app = express();
app.use(cors());

app.use(router)

app.get("/",(req, res)=>{
    res.send("server running fine 🏃‍♂️")
  })
  app.use('/uploads', express.static(path.join(__dirname, '/uploads')));
let PATH =  process.env.PORT || 3344;
let server =app.listen(PATH, ()=>{
    dbConnection();
    console.log(`Marketplace server listening at http://localhost:${PATH}`);
})
process.on('unhandledRejection', error => {
    console.log(error.message);
    server.close(() => process.exit(1));
});