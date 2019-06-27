const express = require('express');

var board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
               [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];

const controller = {
  put: (req, res) => {
    const {x, y, player, status} = req.body;
    board[x][y] = player;
    console.log(board);
    res.send(board);
  },

  post: (req, res) => {
    board = [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]];
    console.log(board);
  }

  
  
}

module.exports = controller;
