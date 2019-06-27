const Sequelize = require('sequelize');
const db = require('./index.js');

const checkout = db.define('buyers', {
  // F1
  name: {
    type: Sequelize.STRING,
    allowNull: true
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: true
  },

  // F2 address
  line1: {
    type: Sequelize.STRING,
    allowNull: true
  },
  line2: {
    type: Sequelize.STRING,
    allowNull: true
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true
  },
  zipCode: {
    type: Sequelize.STRING,
    allowNull: true
  },
  phoneNumber: {
    type: Sequelize.STRING,
    allowNull: true
  },

  //F3
  creditCard: {
    type: Sequelize.STRING,
    allowNull: true
  },
  expDate: {
    type: Sequelize.STRING,
    allowNull: true
  },
  cvv: {
    type: Sequelize.STRING,
    allowNull: true
  },
  billingZipCode: {
    type: Sequelize.STRING,
    allowNull: true
  }},{
    timestamps: false
  }
);

checkout
  .sync()
  .then( () => {
    console.log('connection to database has been made');
  })
  .catch( (err) => {
    console.error('error with connecting to database', err);
  })

module.exports = checkout;