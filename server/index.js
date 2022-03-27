const app = require("./app");
const mongoose = require("mongoose");
const config = require("./config");

const connect = async url => {
  return await mongoose.connect(url, config.db.options);
};

if (require.main === module) {
  app.listen(config.port, console.log(`SERVER RUNNING ON PORT: ${config.port}`));
  connect(config.db.prod);
  mongoose.connection.on('error', console.log);
}

module.exports = { connect };

