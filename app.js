"use strict";

require("dotenv").config();

const port = process.env.PORT || 5000;
const express = require("express");
const bodyParser = require("body-parser");
const sass = require("node-sass-middleware");
const cookieParser = require("cookie-parser");
const app = express();

//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

// Define Routes
const apiRouter = require("./src/routes/api-routes");
const webRouter = require("./src/routes/web-routes");

app.use("/", webRouter);
app.use("/api", apiRouter);

if (process.env.NODE_ENV === "development") {
  app.use(
    sass({
      src: __dirname + "/src",
      dest: __dirname + "/public",
      outputStyle: "compressed",
      debug: true,
    })
  );
}

app.use(express.static(__dirname + "/public"));
app.set("trust proxy", true);
app.set("views", __dirname + "/src/views");
app.engine("ejs", require("./ejs-extended"));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
