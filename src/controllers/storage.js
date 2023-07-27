const multer = require("multer");

const storage = multer.diskStorage({
  destination: "uploads/",
});

module.exports = storage;
