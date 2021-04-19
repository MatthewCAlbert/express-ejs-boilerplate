const express = require("express");
const csrf = require("csurf");
const validator = require("../middlewares/validator");
const schemas = require("../schemas");
const { ApiController } = require("../controllers");

var csrfProtection = csrf({ cookie: true });

const apiRouter = express.Router();

apiRouter.get("/", ApiController.helloWorldHandler);

apiRouter.get("/add", ApiController.testDbHandler);

module.exports = apiRouter;
