const user = require("../models/user");
const { nanoid } = require("nanoid");

class ApiController {
  static testDbHandler = (req, res) => {
    user.get("users").push({ id: nanoid(), name: "anon" }).write();
    res.send(user.read());
  };
  static helloWorldHandler = (req, res) => {
    res.send({ success: true, message: "Hello World" });
  };
}

module.exports = ApiController;
