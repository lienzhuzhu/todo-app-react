import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {

  constructor(props) {
    super(props);

    this.state = {
      text: props.text,
      id: props.id,
      completed: props.completed
    }

    // this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleCompleteClick = this.handleCompleteClick.bind(this);
  }

  handleCompleteClick() {
    console.log("Complete here.");
    console.log(this);

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

    createRequest.open("completed", true);
    createRequest.send();
  }

  handleDeleteClick() {
    console.log("Delete here.");
    console.log(this);

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

    createRequest.open("delete", true);
    createRequest.send();

    // this.setState(state => ({
    //   isToggleOn: !state.isToggleOn
    // }));
  }

  render() {
    let completedClass = false;
    if (this.state.completed === true) {
      completedClass = "completed";
    } else {
      completedClass = "not-completed";
    }

    return (
      <div data-todo-id={this.state.id} className="todo">
        <h2>{this.state.text}</h2>
        <input type="checkbox"></input>
        <input className={completedClass} onClick={this.handleDeleteClick} type="button" value="delete"></input>
      </div>
    );
  }
}

export default Todo;
