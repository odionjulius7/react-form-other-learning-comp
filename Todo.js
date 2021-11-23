import React, { Component } from "react";

const todo = [
  { id: 1, text: "eat at 2pm", completed: false },
  { id: 2, text: "wash at 3pm", completed: false },
];

class Todo extends Component {
  constructor() {
    super();
    this.state = {
      Todo: todo,
    };
    this.handleCompleted = this.handleCompleted.bind(this);
  }

  handleCompleted(id) {
    this.setState((prevState) => {
      const updatedTodo = prevState.Todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }
        return todo;
      });

      return {
        // return individual todo.completed to the Todo array in the state
        Todo: updatedTodo,
      };
    });
  }

  render() {
    const todo = this.state.Todo.map((todo) => todo);

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        {todo.completed === true ? (
          <input type="checkbox" checked={todo.completed} />
        ) : (
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleCompleted(todo.id)}
          />
        )}
        {/*  //   notice: how when we want to pass an id to the handleCompleted() method when put
            // it inside a callback func dat way we prevent calling the funct infinitely
         */}
        <p style={{ paddingLeft: "0.3rem" }}>{todo.text}</p>
      </div>
    );
  }
}

export default Todo;
