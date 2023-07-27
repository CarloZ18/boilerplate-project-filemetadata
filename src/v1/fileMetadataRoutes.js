const express = require("express");
const router = express.Router();
const fileMetadataController=require("../controllers/fileMetadataController")

router.get("/", fileMetadataController.indexController);
router.post("/api/fileanalyse", fileMetadataController.getFileInfoController);

module.exports=router