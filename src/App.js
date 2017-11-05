import React, { Component } from 'react';

var marked = require('marked');

class Output extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      input: props.markdown
    }
  }

  render () {
    return (
      <div dangerouslySetInnerHTML={{__html:marked(this.props.markdown)}}></div>
    )
  }
}

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
  }

  handleChange(event) {
    this.setState({input: this.refs.inputArea.value});
  }

  render () {
    return (
      <section id="app">
        <nav>
          <h1>Markdown Previewer</h1>
        </nav>

        <section id="input">
          <header>
            <h1>Input</h1>
          </header>

          <article>
            <textarea placeholder="Input Markdown here to see the result!" rows="25" ref="inputArea" value={this.state.input? this.state.input : ''} onChange={this.handleChange.bind(this)}/>
          </article>
        </section>

        <section id="output">
          <header>
            <h1>Output</h1>
          </header>

          <article>
            <Output markdown={this.state.input}/>
          </article>
        </section>
      </section>
    )
  }
}


export default Input;