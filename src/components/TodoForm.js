import React from "react";

class TodoForm extends React.Component {
  // Constructor with state
  constructor() {
    super(); //!!!
    this.state = {
      todo: "",
    };
  }

  handleChanges = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  submitTodo = (event) => {
    event.preventDefault();
    this.setState({ todo: "" });
    this.props.addTodo(event, this.state.todo);
  };

  // class property to submit form

  render() {
    return (
      <form className="add-form" onSubmit={this.submitTodo}>
        <input
          type="text"
          name="todo"
          value={this.state.todo}
          onChange={this.handleChanges}
        />
        <br />
        <button>Add</button>
        <div className="search-bar">
          <label htmlFor="search">
            Search
            <input
              type="text"
              name="search"
              value={this.state.todo}
              onChange={this.handleChanges}
            />{" "}
            <br />
            <button>Search</button>
          </label>
        </div>
      </form>
    );
  }
}

export default TodoForm;
