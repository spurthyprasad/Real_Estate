const { deleteBuyerController } = require("../controller/buyerController");
const{
    registerPurchasedController, getPurchasedController
}= require("../controller/purchasedController");

const express = require('express');

const router=express.Router();

router.post("/purchasedInfo",registerPurchasedController);
router.get("/getPurchased",getPurchasedController)

router.delete("/deletePurchased/:id",deleteBuyerController)
module.exports=router