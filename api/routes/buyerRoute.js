const{
    registerBuyerController,
    getBuyerController,
    deleteBuyerController,updateBuyerController
 }= require("../controller/buyerController");

 const express = require('express');

 const router = express.Router();

 router.post("/buyerInfo",registerBuyerController);
 
 router.get("/getBuyer",getBuyerController);
 
 router.delete("/deleteBuyer/:id",deleteBuyerController);

 router.put("/putBuyer/:buyer_id",updateBuyerController);

 module.exports= router;