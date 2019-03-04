require('dotenv').load();

module.exports = {
  mongo: {
    development: {
      connectionString: process.env.development, //local mongodb
    },
    production: {
      connectionString: process.env.production // mlab
    }
  }
};
// # Need to update development environment for each local project in .env