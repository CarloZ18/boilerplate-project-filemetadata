const getFileInfoService = require("../services/fileMetadataService");

const indexController = (req, res) => {
  res.sendFile(process.cwd() + "/views/index.html");
};

const getFileInfoController = async (req, res) => {
  const myFile = req.file;
  const uploadFile = await getFileInfoService(myFile);
  res.send(uploadFile);
};

module.exports = {
  indexController,
  getFileInfoController,
};
