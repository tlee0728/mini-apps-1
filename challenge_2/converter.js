const fs = require('fs');

const converter = (req, res) => {
  var input = req.body.input;
  input = JSON.parse(input);
  var keys = Object.keys(input);
  var result = '';

  //initialize header columns
  for (var i = 0; i < keys.length - 1; i++) {
    result += keys[i] + ',';
  }
  result = result.slice(0, result.length - 1);
  result += '\n';

  // children is array of objects
  var helper = function(salesPerson) {
    for (var keys in salesPerson) {
      if (keys === "children") {
        continue;
      }
      result += salesPerson[keys] + ',';
    }
    result = result.slice(0, result.length - 1);
    result += '\n';
    // iterate through children
    for (var i = 0; i < salesPerson.children.length; i++) {
      helper(salesPerson.children[i]);
    }
  }
  helper(input);
  fs.writeFile('csv.txt', result, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });
  res.status(201).send(result);
}

module.exports = converter;