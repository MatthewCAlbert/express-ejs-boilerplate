const low = require("lowdb");
const path = require("path");
const FileSync = require("lowdb/adapters/FileSync");

const adapter = (filename) =>
  new FileSync(
    path.join(
      process.env.NODE_ENV === "production"
        ? process.env.LOWDB_PRODUCTION_DIR
        : process.env.LOWDB_DEVELOPMENT_DIR,
      filename
    )
  );
const lowdb = (filename) => low(adapter(filename));

module.exports = lowdb;
