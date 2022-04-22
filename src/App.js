import React, { Component } from 'react';
import Todo from './Todo'
import NewTodo from './NewTodo';
import './App.css';


const apiKey = "96364a-276feb-952475-c85e9e-d6e333";

class App extends Component {
  
  // App class constructor
  //
  constructor(props) {
    super(props);
    this.state = {
      todos: [],          // array containg all todos in server
      inputText: "",      // value from input form
    }

    this.handleTextChange = this.handleTextChange.bind(this);
  }

  // add item input handler
  //
  handleTextChange(inputTextFromChildComponent) {
    this.setState({inputText: inputTextFromChildComponent});
    console.log(inputTextFromChildComponent);
  }

  // related to input handler
  //
  createNewTodo() {
    // ajax call here
    // this.state.inputText;
  }


  // loads items from server into todos array
  //
  componentDidMount() {
    this.refreshTodosFromApi();
  }
  
  // helper method to load items from server
  //
  refreshTodosFromApi() {
    console.log("ComponentDidMount() ran");
    var self = this;

    var loadRequest = new XMLHttpRequest();

    loadRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
          self.setState({
            todos: [JSON.parse(this.responseText)] 
          });
        }
    };

    loadRequest.open("GET", "https://cse204.work/todos", true);
    loadRequest.setRequestHeader("x-api-key", apiKey);
    loadRequest.send();

    // this.setState({
    //   todos: [
    //     { text: "first item", id: 123456, completed: true },
    //     { text: "second item", id: 789123, completed: false }
    //   ]
    // })

  }

  updateComponentCompletedState(todoId) {
    // iterate over this.state.todos
    // look for the item with id todoId
  }


  render() {
    return (
      <div className="App">
        <h1>Lien's ToDo App</h1>

        <NewTodo 
        handleTextChange={this.handleTextChange}
        createNewTodo={this.createNewTodo}
        />  

        <section id="myTodos">
          {this.state.todos.map((item) =>
            <Todo 
              text={item.text} 
              id={item.id} 
              key={item.id}
              completed={item.completed} 
              
            />
          )}

          {/* refreshTodosFromApi={this.refreshTodosFromApi} */}
        </section>
      </div>
    );
  }

}

export default App;
