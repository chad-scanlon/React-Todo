import React from "react";
import ReactDom from "react-dom";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todos = [
  {
    name: "Walk the dogs",
    id: 0,
    completed: false,
  },
  {
    name: "Mow the lawn",
    id: 1,
    completed: false,
  },
  {
    name: "Take out trash",
    id: 2,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = { todos };
  }

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      name: todo,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  inputChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };
  toggleTodo = (todoID) => {
    console.log(todoID);
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todoID === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    });
  };

  clearCompleted = (event) => {
    event.preventDefault();
    this.setState({
      todos: this.state.todos.filter((todo) => !todo.completed),
    });
  };
  searchResults = (event) => {
    event.preventDefault();
    this.state.todos.filter((todo) => {
      return todo.name
        .toLowerCase()
        .includes(this.state.inputValue.toLowerCase());
    });
  };
  render() {
    return (
      <div>
        <div className="header">
          <h2>Todo List</h2>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <div className="list">
          <TodoList
            todos={this.state.todos}
            toggleTodo={this.toggleTodo}
            clearCompleted={this.clearCompleted}
            searchResults={this.searchResults}
          />
        </div>
      </div>
    );
  }
}

export default App;
