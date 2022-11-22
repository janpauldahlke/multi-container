import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    seenIndexes: [],
    values: {},
    index: '',
  }

  componentDidMount() {
    this.fetchValues();
    this.fetchIndixes();
  };

  async fetchValues() {
    const values = await axios.get('/api/values/current');
    this.setState({ values: values.data });
  };

  async fetchIndixes() {
    const seeIndexes = await axios.get('/api/values/all');
    this.setState({
      seeIndexes: seeIndexes.data
    });
  };

  renderSeenIndexes() {
    return (this.state.seenIndexes ?? []).map((value, i) => {
      return (<li key={i}>{ value }</li>)
    })
  }

  renderValues() {
    const entries = [];
    for (let key in this.state.values) {
      entries.push(
        <li key={key}>
          For index {key} we have found {this.state.values[key]}
        </li>  
      )
    }
    return entries;
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('/api/values', {
      index: this.state.index
    });
    //clearing the input
    this.setState({ index: '' });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Enter your index: </label>
          <input
            type="text"
            value={this.state.index}
            onChange={event => this.setState({ index: event })}></input>
          <button>Submit</button>
        </form>

        <h3>Already seen indices:</h3>
        <ul>{this.renderSeenIndexes()}</ul>


        <h3>Calulated values: </h3>
        <ul>{ this.renderValues()}</ul>
      </div>
    )
  }
};

export default Fib;