import React, { Component } from 'react';
import './Todo.css';


const apiKey = "96364a-276feb-952475-c85e9e-d6e333";

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      id: props.id,
      completed: props.completed,
      key: props.key,
    }

    // This binding is necessary to make `this` work in the callback
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }


  // checkbox click event handler
  //
  handleCompleteClick() {
    console.log("Complete here.");
  }


  // delete button click event handler
  //
  handleDeleteClick() {
    console.log("Delete here.");
    console.log(this);

    var self = this;
    var deleteRequest = new XMLHttpRequest();
    deleteRequest.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        self.setState({
          todos: [JSON.parse(this.responseText)] 
        });
      }
    }

    deleteRequest.open("DELETE", "https://cse204.work/todos/"+this.state.id, true);
    deleteRequest.setRequestHeader("Content-type", "application/json");
    deleteRequest.setRequestHeader("x-api-key", apiKey);
    deleteRequest.send();
  }



  render() {

    let completedClass = "";
    if (this.state.completed === true) {
      completedClass = "completed-class";
    } else {
      completedClass = "not-completed-class";
    }

    return (
      <div data-todo-id={this.state.id} className="todo-item-wrapper" id={this.state.id} key={this.state.id}>
        <h2 className={completedClass}>{this.state.text}</h2>
        <input onClick={this.handleCompleteClick} type="checkbox"></input>
        <input onClick={this.handleDeleteClick} type="button" value="delete" className="delete-button-class"></input>
      </div>
    );
  }
}

export default Todo;
