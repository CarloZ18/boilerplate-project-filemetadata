const bodyParser = require("body-parser");
const cors = require("cors");
const multer = require("multer");
const storage = require("../src/controllers/storage");



module.exports.bodyParser = bodyParser.urlencoded({ extended: false });
module.exports.cors = cors();
module.exports.multer=multer({storage:storage,dest:"uploads/",limits:{fieldSize:1000000}}).single('upfile')