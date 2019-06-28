import React from 'react';
import axios from 'axios';
import helper from './helper.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      player: 1,
      board: [[0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], 
              [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios
      .post('/api')
    
  }

  handleClick (col) {
    var y = col;
    var x;
    for (var i = 5; i >= 0; i--) {
      if (this.state.board[i][col] === 0) {
        x = i; 
        break;
      }
    }
    if (this.state.player === 1) {
      document.getElementById(`r${x}c${y}`).style.backgroundColor = 'red';
    } else {
      document.getElementById(`r${x}c${y}`).style.backgroundColor = 'yellow';
    }    

    axios
      .put('/api', {
        x: x, 
        y: y,
        player: this.state.player,
        status: status
      })
      .then( ({data}) => {
        this.setState({board: data});
        console.log(data);
        var status = helper(x, y, this.state.player, this.state.board);
        var player = 3 - this.state.player;
        this.setState({
          player: player,
          status: status
        })
        
      })
      .catch( (err) => {'error placing piece'})
  }

  render() {
    var finish;
    if (this.state.status) {
      finish = `Player ${3 - this.state.player} wins!`;
    }
    return ( 
      <tbody>
        <tr>
          {finish}
        </tr>
        {/* row 1 */}
        <tr className="r0">
          <td onClick={()=>this.handleClick(0)} className="c0" id="r0c0"> </td>
          <td onClick={()=>this.handleClick(1)} className="c1" id="r0c1"></td>
          <td onClick={()=>this.handleClick(2)} className="c2" id="r0c2"></td>
          <td onClick={()=>this.handleClick(3)} className="c3" id="r0c3"></td>
          <td onClick={()=>this.handleClick(4)} className="c4" id="r0c4"></td>
          <td onClick={()=>this.handleClick(5)} className="c5" id="r0c5"></td>
          <td onClick={()=>this.handleClick(6)} className="c6" id="r0c6"></td>
        </tr>

        <tr className="r1">
          <td onClick={()=>this.handleClick(0)} className="c0" id="r1c0"></td>
          <td onClick={()=>this.handleClick(1)} className="c1" id="r1c1"></td>
          <td onClick={()=>this.handleClick(2)} className="c2" id="r1c2"></td>
          <td onClick={()=>this.handleClick(3)} className="c3" id="r1c3"></td>
          <td onClick={()=>this.handleClick(4)} className="c4" id="r1c4"></td>
          <td onClick={()=>this.handleClick(5)} className="c5" id="r1c5"></td>
          <td onClick={()=>this.handleClick(6)} className="c6" id="r1c6"></td>
        </tr>

        <tr className="r2">
          <td onClick={()=>this.handleClick(0)} className="c0" id="r2c0"></td>
          <td onClick={()=>this.handleClick(1)} className="c1" id="r2c1"></td>
          <td onClick={()=>this.handleClick(2)} className="c2" id="r2c2"></td>
          <td onClick={()=>this.handleClick(3)} className="c3" id="r2c3"></td>
          <td onClick={()=>this.handleClick(4)} className="c4" id="r2c4"></td>
          <td onClick={()=>this.handleClick(5)} className="c5" id="r2c5"></td>
          <td onClick={()=>this.handleClick(6)} className="c6" id="r2c6"></td>
        </tr>

        <tr className="r3">
          <td onClick={()=>this.handleClick(0)} className="c0" id="r3c0"></td>
          <td onClick={()=>this.handleClick(1)} className="c1" id="r3c1"></td>
          <td onClick={()=>this.handleClick(2)} className="c2" id="r3c2"></td>
          <td onClick={()=>this.handleClick(3)} className="c3" id="r3c3"></td>
          <td onClick={()=>this.handleClick(4)} className="c4" id="r3c4"></td>
          <td onClick={()=>this.handleClick(5)} className="c5" id="r3c5"></td>
          <td onClick={()=>this.handleClick(6)} className="c6" id="r3c6"></td>
        </tr>

        <tr className="r4">
          <td onClick={()=>this.handleClick(0)} className="c0" id="r4c0"></td>
          <td onClick={()=>this.handleClick(1)} className="c1" id="r4c1"></td>
          <td onClick={()=>this.handleClick(2)} className="c2" id="r4c2"></td>
          <td onClick={()=>this.handleClick(3)} className="c3" id="r4c3"></td>
          <td onClick={()=>this.handleClick(4)} className="c4" id="r4c4"></td>
          <td onClick={()=>this.handleClick(5)} className="c5" id="r4c5"></td>
          <td onClick={()=>this.handleClick(6)} className="c6" id="r4c6"></td>
        </tr>

        <tr className="r5">
          <td onClick={()=>this.handleClick(0)} className="c0" id="r5c0"></td>
          <td onClick={()=>this.handleClick(1)} className="c1" id="r5c1"></td>
          <td onClick={()=>this.handleClick(2)} className="c2" id="r5c2"></td>
          <td onClick={()=>this.handleClick(3)} className="c3" id="r5c3"></td>
          <td onClick={()=>this.handleClick(4)} className="c4" id="r5c4"></td>
          <td onClick={()=>this.handleClick(5)} className="c5" id="r5c5"></td>
          <td onClick={()=>this.handleClick(6)} className="c6" id="r5c6"></td>
        </tr>

      </tbody>
    )
  }
}

export default App;

