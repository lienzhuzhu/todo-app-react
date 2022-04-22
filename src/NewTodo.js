import React, { Component } from 'react';
import './NewTodo.css';


class NewTodo extends Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);

    this.state = {
      inputText: ""
    }
  }

  // handle text input 
  //
  handleTextChange(event) {
    this.setState({inputText: event.target.value});
    this.props.handleTextChange(event.target.value);
  }

  // create new todo on form submission 
  // by calling parent function
  //
  createNewTodo(event) {
    event.preventDefault();
    this.props.createNewTodo();
    this.setState({inputText: ""});
  }


  render() {
    return (
      <div id="form-id" className="form-wrapper">
        <h2>Add A Todo Item Form</h2>

        <form onSubmit={this.createNewTodo} className="add-form" id="add-item-form">
          <input value={this.state.inputText} onChange={this.handleTextChange} type="text" name="add-todo-input" id="add-input"/>
          <button type="submit" id="add-button">Add</button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
