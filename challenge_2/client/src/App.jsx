import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      csv: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const fileToLoad = document.getElementById("fileToLoad").files[0];
    const reader = new FileReader()
    reader.onload = (event) => {
      console.log("reading file", event.target.result)
      this.setState({
        csv: event.target.result
      })
    }

    reader.readAsText(fileToLoad, "UTF-8");

    // axios
    //   .post('/api', {input: this.state.input})
    //   .then( (data) => {
    //     this.setState({
    //       csv: data.data
    //     })
    //   })
    //   .catch( (err) => {
    //     console.error('error submitting', err);
    //   })
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
            {/* <textarea onChange={this.handleChange} id="textarea" type="textarea"></textarea> */}
            <input type="file" id="fileToLoad"/>
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