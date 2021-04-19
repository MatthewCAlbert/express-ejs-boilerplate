const lowdb = require("../utils/lowdb");

const user = lowdb("user.json");

user.defaults({ users: [], count: 0 }).write();

module.exports = user;
