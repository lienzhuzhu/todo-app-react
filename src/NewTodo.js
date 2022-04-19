import React, { Component } from 'react';
import './NewTodo.css';

class NewTodo extends Component {
  render() {
    return (
      <div id="{data-todo.id}" className="Todo">
        <h2>Add A Todo Item Form</h2>
        <input type="text"></input>
      </div>
    );
  }
}

export default NewTodo;
