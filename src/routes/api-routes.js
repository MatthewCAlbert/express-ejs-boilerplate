const express = require("express");
const csrf = require("csurf");
const validator = require("../middlewares/validator");
const schemas = require("../schemas");

const handler = require("../handlers");

var csrfProtection = csrf({ cookie: true });

const apiRouter = express.Router();

apiRouter.get("/", handler.helloWorldHandler);

module.exports = apiRouter;
