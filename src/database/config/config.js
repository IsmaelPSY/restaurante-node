const config = require('../../config')

module.exports = {
  "development": {
    "username": "academlo",
    "password": "170520210921",
    "database": "restaurante",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    url: config.url,
    use_env_variable: config.url,
    dialectOptions: {
      ssl: {
          require: true,
          rejectUnauthorized: false
      }
    }
  }
}
