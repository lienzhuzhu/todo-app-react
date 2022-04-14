import React, { Component } from 'react';

import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div id="{data-todo.id}" className="Todo">
        <p>{this.props.text}</p>
        <p><input type="checkbox"></input>Complete</p>
        <p><input type="checkbox"></input>Delete</p>
      </div>
    );
  }
}

export default Todo;
