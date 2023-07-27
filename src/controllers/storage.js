const multer = require("multer");
const { resolve } = require("path");
const { existsSync, unlink } = require("fs");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, done) => {
    if (file) {
      const extFile = file.originalname.replace(".", "");
      const extPattern = /(jpg|jpeg|png|gif|svg)/gi.test(extFile);
      if (!extPattern)
        return done(new TypeError("File format is not valid"), null);
      req.photo = file.originalname;
      return done(null, file.originalname);
    }
  },
});

module.exports = storage;
