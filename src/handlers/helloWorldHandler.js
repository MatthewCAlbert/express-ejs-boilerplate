const helloWorldHandler = (req, res) => {
  res.send({ success: true, message: "Hello World" });
};

module.exports = helloWorldHandler;
