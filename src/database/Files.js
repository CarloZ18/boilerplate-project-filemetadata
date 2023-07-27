require("dotenv").config();
const mongoose = require("mongoose");

//Connect database
mongoose.connect(
  "mongodb+srv://CarloZ:153624@cluster0.g7rgryz.mongodb.net/fcc-file-metadata-microservice?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
//Model
const filesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  size: { type: Number, required: true },
});

let Files = mongoose.model("Files", filesSchema);
module.exports = Files;
