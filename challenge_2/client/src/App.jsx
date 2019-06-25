import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      csv: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    axios
      .post('/api', {input: this.state.input})
      .then( (data) => {
        console.log(data.data);
        this.setState({
          csv: data.data
        })
      })
      .catch( (err) => {
        console.error('error submitting', err);
      })
  }

  handleChange(e) {
    var change = e.target.value;
    this.setState({
      input: change
    })
    // console.log(this.state);
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <textarea onChange={this.handleChange} id="textarea" type="textarea"></textarea>
            <button>Submit</button>
          </form>
        </div>
        
        <div>
          {this.state.csv}
        </div>
      </div>
    )
  }
}

export default App;