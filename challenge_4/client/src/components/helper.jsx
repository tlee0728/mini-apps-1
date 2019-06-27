const helper = function(x, y, player, board) {
  
  var vertical = () => {
    var count = 0;
    for (var i = x; i < 6; i++) {
      if (board[i][y] === player) {
        count += 1;
        if (count === 4) {
          return true;
        }
      } else {
        return false;
      }
      // check if it's out of bounds
      if (i === 5) {
        return false;
      }
    }
  }

  var horizontal = () => {
    var count = 0;
    for (var i = 0; i < 7; i++) {
      if (board[x][i] === player) {
        count += 1;
        if (count === 4) {
          return true;
        }
      } else {
        count = 0;
      }
    }
    return false;
  }

  var majorDiagonal = () => {
    var count = 0;
    var ind = x + y;
    if (ind <= 5) {
      var j = 0;
      for (var i = ind; i >= 0; i--) {
        if (board[i][j] === player) {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else {
          count = 0;
        }
        j += 1;
      }
    } else {
      var i = 5;
      for (var j = ind - 5; j <= 6; j++) {
        if (board[i][j] === player) {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else {
          count = 0;
        }
        i -= 1;
      }
    }
    return false;
  }

  var minorDiagonal = () => {
    var count = 0;
    var ind = x - y;
    if (ind >= 0) {
      var j = 0;
      for (var i = ind; i <= 5; i++) {
        if (board[i][j] === player) {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else {
          count = 0;
        }
        j += 1;
      }
    } else {
      var i = 0;
      for (var j = -ind; j <= 6; j++) {
        if (board[i][j] === player) {
          count += 1;
          if (count === 4) {
            return true;
          }
        } else {
          count = 0;
        }
        i += 1;
      }
    }
    return false;
  }
  console.log('vertical', vertical());
  console.log('horiz',horizontal());
  console.log('maj',majorDiagonal());
  console.log('minor',minorDiagonal());

  return vertical() || horizontal() || majorDiagonal() || minorDiagonal();
};

export default helper;