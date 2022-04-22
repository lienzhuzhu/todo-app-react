import React, { Component } from 'react';
import './NewTodo.css';

const apiKey = "96364a-276feb-952475-c85e9e-d6e333";

class NewTodo extends Component {

  constructor(props) {
    super(props);

    this.handleTextChange = this.handleTextChange.bind(this);

    this.state = {
      inputText: ""
    }
  }

  handleTextChange(event) {
    console.log("text change newtodo");
    this.setState({inputText: event.target.value});
    this.props.handleTextChange(event.target.value);
  }

  // submit handler
  //
  handleAddClick() {
    // Setting variable for form input (get from HTML form)
    let itemText = document.getElementById("add-input").value;
  
    var data = {
      text: itemText
    }
    
    var self = this;
    var createRequest = new XMLHttpRequest();
    createRequest.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      // save new Todo to state
      self.setState({
        todos: [...self.state.todos, JSON.parse(this.responseText)]
      })
      // clear the input field
      self.setState({input: ''});
    }
    }
    createRequest.open("POST", "https://cse204.work/todos", true);
    createRequest.setRequestHeader("Content-type", "application/json");
    createRequest.setRequestHeader("x-api-key", apiKey);
    createRequest.send(JSON.stringify(data));
  }


  render() {
    return (
      <div id="form-id" className="form-wrapper">
        <h2>Add A Todo Item Form</h2>

        <form className="add-form" id="add-item-form">
          <input value={this.state.inputText} onChange={this.handleTextChange} type="text" name="add-todo-input" id="add-input"/>
          {/* <input type="submit" name="add-todo-btn" id="add-button" value="Add"/> */}
          <button onClick={this.createNewTodo} id="add-button" value="Add">Add</button>
        </form>
      </div>
    );
  }
}

export default NewTodo;
