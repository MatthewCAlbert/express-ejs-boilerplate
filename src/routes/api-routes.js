const express = require("express");
const csrf = require("csurf");
const validator = require("../middlewares/validator");
const schemas = require("../schemas");

var csrfProtection = csrf({ cookie: true });

const apiRouter = express.Router();

apiRouter.get("/", async (req, res) => {
  res.send({ success: true, devstat: process.env.NODE_ENV });
});

module.exports = apiRouter;
