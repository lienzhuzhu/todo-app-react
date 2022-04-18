import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';
import NewTodo from './NewTodo';

// import NewTodo from './NewTodo'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    console.log("ComponentDidMount() ran");
    //   // Make API call to fetch existing Todos.
    //   fetch('http://example.com/todos')
    //   .then(function (response) {
    //     this.setState({todos: JSON.parse(response)});
    //   }
    // );
    this.setState({
      todos: [
        {
          text: "hey, this is dynamic",
          id: 123456
        },
        {
          text: "this one too",
          id: 789123
        }
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Lien's ToDo App</h1>
        <NewTodo/>
        <section id="myTodos">
          <hr></hr>
          {this.state.todos.map((item) =>
          <Todo text={item.text} id={item.id} key={item.id}/>
          )}
          <hr></hr>
        </section>
      </div>
    );
  }
}

export default App;
