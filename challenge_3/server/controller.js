const express = require('express');
const checkoutDB = require('../database/model.js');

const controller = {
  post: (req, res) => {
    checkoutDB
      .create()
      .then( (data) => {
        res.status(201).send(data.id.toString());
      })
      .catch( (err) => {
        res.status(404).send('error creating entry in db');
      })
    
  },

  update: (req, res) => {
    if (Object.keys(req.body).length === 4) {
      const { name, email, password, id } = req.body;
      checkoutDB
        .update({
          name: name,
          email: email,
          password: password
        }, {
          where : {
            id: id
          }
        })
        .then( () => {
          res.status(200).send('ADDED INTO ENTRY YAY 1');
        })
        .catch( (err) => {
          res.status(404).send('error adding info to db');
        })
    } else if (Object.keys(req.body).length === 7) {
      const { line1, line2, city, state, zipCode, phoneNumber,id } = req.body;
      checkoutDB
        .update({
          line1: line1,
          line2: line2,
          city: city,
          state: state,
          zipCode: zipCode,
          phoneNumber: phoneNumber
        }, {
          where : {
            id: id
          }
        })
        .then( () => {
          res.status(200).send('ADDED INTO ENTRY YAY 2');
        })
        .catch( (err) => {
          res.status(404).send('error adding info to db');
        })
    } else if (Object.keys(req.body).length === 5) {
      const { creditCard, expDate, cvv, billingZipCode, id } = req.body;
      checkoutDB
        .update({
          creditCard: creditCard,
          expDate: expDate,
          cvv: cvv,
          billingZipCode: billingZipCode
        }, {
          where : {
            id: id
          }
        })
        .then( () => {
          res.status(200).send('ADDED INTO ENTRY YAY 3');
        })
        .catch( (err) => {
          res.status(404).send('error adding info to db');
        })
    }



  }
}

module.exports = controller;