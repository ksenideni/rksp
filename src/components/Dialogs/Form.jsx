import React from 'react';
import { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit}>
        <input type="text" id="name" />
        <input type="submit" value="Отправить" />
      </form>
    );
  }
}
