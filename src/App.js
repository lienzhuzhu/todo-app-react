import React, { Component } from 'react';
// import Todo from './Todo'
import NewTodo from './NewTodo';
import './App.css';


const apiKey = "96364a-276feb-952475-c85e9e-d6e333";

class App extends Component {
  
  // App class constructor
  //
  constructor(props) {
    super(props);

    this.state = {
      todos: [],                                                // array containg all todos in server
      inputText: "",                                            // value from input form
    }

    this.handleTextChange = this.handleTextChange.bind(this);
    this.createNewTodo = this.createNewTodo.bind(this);
  }

  // detect change in text input
  //
  handleTextChange(inputTextFromChildComponent) {
    this.setState({inputText: inputTextFromChildComponent});
    console.log(inputTextFromChildComponent);
  }

  // add item
  //
  createNewTodo() {

    let data = {
      text: this.state.inputText
    }

    let self = this;
    let createRequest = new XMLHttpRequest();
    createRequest.onreadystatechange = function() {
        if (this.readyState === 4 && this.status === 200) {
            self.setState({
              todos: [...self.state.todos, JSON.parse(this.responseText)]
            });
        } 
    };

    createRequest.open("POST", "https://cse204.work/todos", true);
    createRequest.setRequestHeader("Content-type", "application/json");
    createRequest.setRequestHeader("x-api-key", apiKey);
    createRequest.send(JSON.stringify(data));

    // self.setState({inputText: ""});
  }


  // // loads items from server into todos array
  // //
  // componentDidMount() {
  //   this.refreshTodosFromApi();
  // }
  
  // // helper method to load items from server
  // //
  // refreshTodosFromApi() {
  //   console.log("ComponentDidMount() ran");
    
  //   // var self = this;

  //   // var loadRequest = new XMLHttpRequest();

  //   // loadRequest.onreadystatechange = function() {
  //   //     if (this.readyState === 4 && this.status === 200) {
  //   //       self.setState({
  //   //         todos: [JSON.parse(this.responseText)] 
  //   //       });
  //   //     }
  //   // };

  //   // loadRequest.open("GET", "https://cse204.work/todos", true);
  //   // loadRequest.setRequestHeader("x-api-key", apiKey);
  //   // loadRequest.send();

  //   this.setState({
  //     todos: [
  //       { text: "first item", id: "123456", completed: true, key: "123456" },
  //       { text: "second item", id: "789123", completed: false, key: "789123" }
  //     ]
  //   })

  // }


  render() {
    return (
      <div className="App">
        <h1>Lien's ToDo App</h1>

        <NewTodo 
          handleTextChange={this.handleTextChange}
          createNewTodo={this.createNewTodo}
        />  

        <section id="myTodos">


          {/* {this.state.todos.map((item) =>
            <Todo 
              text={item.text} 
              id={item.id}
              completed={item.completed} 
              key={item.id}
              refreshTodosFromApi={this.refreshTodosFromApi}
            />
          )} */}

          
        </section>
      </div>
    );
  }

}

export default App;
