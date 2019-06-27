const Sequelize = require('sequelize');
const db = new Sequelize('checkout', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

module.exports = db;