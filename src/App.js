import React, { Component } from 'react';

var marked = require('marked');

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      original: '',
      compiled: ''
    }
  }

  handleChange(event) {
    this.setState({original: event.target.value});

    this.setState({compiled: marked(this.state.original)});
  }

  
  render() {
    return (
      <section id="app">
        <section id="input">
          <textarea ref="inputArea" value={this.state.original? this.state.original : ''} onChange={this.handleChange.bind(this)}/>
        </section>
        <section id="output" dangerouslySetInnerHTML={{__html:this.state.compiled}}></section>
      </section>
    )
  }
}


export default App;

/*
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
*/