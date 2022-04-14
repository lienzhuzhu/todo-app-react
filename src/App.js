import React, { Component } from 'react';
import './App.css';
import Todo from './Todo'
// import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount ran");
    //   // Make API call to fetch existing Todos.
    //   fetch('http://example.com/todos')
    //   .then(function (response) {
    //     this.setState({todos: JSON.parse(response)});
    //   }
    // })
  }
  render() {
    return (
      <div className="App">
        <h1>Lien's ToDo App</h1>
        <section id="myTodos">
          <Todo text="brush teeth" id="abc123" key="abc123" />
          <Todo text="eat" id="abc456" />
          <Todo text="sleep" id="anotherID" />
        </section>
      </div>
    );
  }
}

export default App;
