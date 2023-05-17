import React from 'react';
import { Component } from 'react';
import Form from './Form';

export default class Dialog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(event) {
    event.preventDefault();
    var newNames = [...this.state.names];
    newNames.push(event.target.name.value);
    this.setState({names: newNames});
  }

  render() {
    var nameDivs = [];
    for (let i in this.state.names) {
      nameDivs.push(<div key={i}>{this.state.names[i]}</div>)
    }

    return (
      <div>
        <Form
          handleSubmit={this.handleSubmit}
        >
        </Form>
        {nameDivs}
      </div>
    );
  }
}