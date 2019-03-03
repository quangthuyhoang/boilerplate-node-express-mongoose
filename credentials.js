require('dotenv').load();

module.exports = {
  mongo: {
    development: {
      connectionString: process.env.development,
    },
    production: {
      connectionString: process.env.production
    }
  }
};
// # Need to update development environment for each local project in .env