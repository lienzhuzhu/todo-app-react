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
    }

    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }


  // checkbox click event handler
  //
  handleCompleteClick() {
    console.log("Complete here.");
    console.log(this.state.id);

    let checkButton = document.getElementById(this.state.id);

    let data;
    if (checkButton.checked) {
      data = {
          "completed": true
      }
    } else {
      data = {
          "completed": false
      }
    }
    
    let self = this;
    let completeRequest = new XMLHttpRequest();
    completeRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log("successful call");
        self.props.refreshTodosFromApi();
      }
    }
    completeRequest.open("PUT", "https://cse204.work/todos/"+self.state.id, true);
    completeRequest.setRequestHeader("Content-type", "application/json");
    completeRequest.setRequestHeader("x-api-key", apiKey);
    completeRequest.send(JSON.stringify(data));

  }


  // delete button click event handler
  //
  handleDeleteClick() {
    let self = this;
    let deleteRequest = new XMLHttpRequest();
    
    deleteRequest.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        console.log("successful delete call");
        self.props.refreshTodosFromApi();
      } 
    }

    deleteRequest.open("DELETE", "https://cse204.work/todos/"+self.state.id, true);
    deleteRequest.setRequestHeader("Content-type", "application/json");
    deleteRequest.setRequestHeader("x-api-key", apiKey);
    deleteRequest.send();
  }

  render() {
    let completedClass = "";
    if (this.props.completed === true) {      // this.state.completed === blah doesn't work
      completedClass = "completed-class";
    } else {
      completedClass = "not-completed-class";
    }

    return (
      <div data-todo-id={this.state.id} className="todo-item-wrapper">
        <input onChange={this.handleCompleteClick} id={this.state.id} type="checkbox" className="complete-checkbox-class" defaultChecked={this.props.completed} ></input>
        <p className={completedClass}>{this.state.text}</p>
        <input onClick={this.handleDeleteClick} type="button" value="delete" className="delete-button-class"></input>
      </div>
    );
  }
}

export default Todo;
