const Files = require("../database/Files");

const getFileInfoService = async (file) => {
  const { originalname, mimetype, size } = file;
  const newFile = {
    name: originalname,
    type: mimetype,
    size: size,
  };
  
  
  try {
    const findFile = await Files.find({ name: 'hola' });
    const newFileInDB =
      findFile.length < 1 ? await Files.create(newFile) : findFile[0];
    newFileInDB.save();
    return {
      name: newFileInDB.name,
      type: newFileInDB.type,
      size: newFileInDB.size,
    };
  } catch (err) {
    return err.toString();
  }
};

module.exports = getFileInfoService;
