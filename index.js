var express = require("express");
var app = express();
require("dotenv").config();
const { cors, bodyParser, multer } = require("./middleware");
const v1fileMetadataRoutes = require("./src/v1/fileMetadataRoutes");

app.use(cors);
app.use(bodyParser);
app.use(multer);
app.use("/public", express.static(process.cwd() + "/public"));
app.use("/", v1fileMetadataRoutes);
app.use("/api/fileanalyse", v1fileMetadataRoutes);
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log("Your app is listening on port " + port);
});
