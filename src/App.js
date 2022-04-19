import React, { Component } from 'react';
import Todo from './Todo'
import './App.css';
import NewTodo from './NewTodo';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.refreshTodosFromApi();
  }

  refreshTodosFromApi() {
    console.log("ComponentDidMount() ran");

    //   // Make API call to fetch existing Todos.
    //   fetch('http://example.com/todos')
    //   .then(function (response) {
    //     this.setState({todos: JSON.parse(response)}); // this line in onreadystatehange
    //   }
    // );

    this.setState({
      todos: [
        {
          text: "first item",
          id: 123456,
          completed: true
        },
        {
          text: "second item",
          id: 789123, 
          completed: false
        }
      ]
    })

  }

  updateComponentCompletedState(todoId) {
    // iterate over this.state.todos
    // look for the item with id todoId
  }


  render() {
    return (
      <div className="App">
        <h1>Lien's ToDo App</h1>
        <NewTodo/>
        <section id="myTodos">
          <hr></hr>

          {this.state.todos.map((item) =>
            <Todo 
              text={item.text} 
              id={item.id} 
              completed={item.completed} 
              key={item.id}
              refreshTodosFromApi={this.refreshTodosFromApi}
            />
          )}

          <hr></hr>
        </section>
      </div>
    );
  }

}

export default App;
