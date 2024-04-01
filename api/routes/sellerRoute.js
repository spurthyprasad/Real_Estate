const { registerSellerController,updateSellerController, getSellerController, deleteSellerController, getImagesController} = require("../controller/sellerController");

const express = require('express');

const router = express.Router();

router.post("/sellerInfo", registerSellerController);

router.get("/getSeller", getSellerController);

router.delete("/deleteSeller/:id", deleteSellerController);

router.get("/getImages/:id", getImagesController);

router.put("/putSeller/:seller_id",updateSellerController)

module.exports = router;