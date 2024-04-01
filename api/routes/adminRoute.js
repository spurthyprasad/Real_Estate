const {
  getAdminController,registerAdminController
} = require("../controller/adminController");


const express = require("express");

const router = express.Router();

router.post("/register", registerAdminController);

router.get("/getregister", getAdminController); 

module.exports = router;

