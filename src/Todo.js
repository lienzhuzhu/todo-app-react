import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
  render() {
    return (
      <div data-todo-id="{this.props.id}" className="todo">
        <h2>ToDo Component</h2>
        <p>{this.props.text}</p>
        <input type="checkbox"></input>
        <input type="button" value="delete"></input>
      </div>
    );
  }
}

export default Todo;
