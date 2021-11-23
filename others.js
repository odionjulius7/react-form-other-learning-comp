componentDidMount() {
  fetch("https://jsonplaceholder.typicode.com/users/1/albums")
    .then((response) => response.json())
    .then((json) => {
      this.setState(() => {
        return {
          data: json,
        };
      });
    });
}

async componentDidMount(callback) {
  const urlData = await fetch(
    "https://jsonplaceholder.typicode.com/users/1/albums"
  );
  const response = await urlData.json();
  this.setState(() => {
    return {
      data: response,
    };
  });
}

componentDidMount() {
  setInterval(() => {
    this.setState(() => {
      return {
        isLoggedIn: true,
      };
    });
  }, 1500);
}

logOUt() {
  this.setState(() => {
    return {
      isLoggedIn: false,
    };
  });
}

logIn() {
  this.setState(() => {
    return {
      isLoggedIn: true,
    };
  });
}

render() {
  return (
    <div style={{ textAlign: "center", paddingTop: "10rem" }}>
      {this.state.isLoggedIn ? (
        <div>
          <button
            style={{
              background: "orangered",
              border: "none",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
            onClick={this.logOUt}
          >
            Log Out
          </button>
          <p>logged in</p>
        </div>
      ) : (
        <div>
          <button
            style={{
              background: "greenyellow",
              border: "none",
              padding: "0.5rem",
              borderRadius: "3px",
            }}
            onClick={this.logIn}
          >
            Log In
          </button>
          <p>logged out</p>
        </div>
      )}
    </div>
  );
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      TodosData: TodosData,
    };

    this.handleCompleted = this.handleCompleted.bind(this);
    this.unCheckHandler = this.unCheckHandler.bind(this);
  }

  // NOTE: why we are using the map is to make the change to a singular item thru the id
  //  not affect other items not clicked
  handleCompleted(id) {
    this.setState((prevState) => {
      // we'll map thru each item/item.id to effect chANGE when clicked on each item
      // is just to flip/toggle btwn either true/false when a task is completed
      const updatedTodos = prevState.TodosData.map((todo) => {
        if (todo.id === id) {
          todo.completed = true;
        }

        return todo; //this change on todo is returned to updatedTodos
      });

      return {
        TodosData: updatedTodos,
        // we are now passing the changes made to the parent state/object
      };
    });
  }

  unCheckHandler(id) {
    this.setState((prevState) => {
      const unCheck = prevState.TodosData.map((todo) => {
        if (todo.id === id) {
          todo.completed = false;
        }
        return todo;
      });

      return {
        TodosData: unCheck,
      };
    });
  }

  render() {
    // console.log(this.state.TodosData);
    const items = this.state.TodosData.map((todo) => {
      return (
        <ChildApp
          id={todo.id}
          todo={todo}
          handleCompleted={this.handleCompleted}
          unCheckHandler={this.unCheckHandler}
        />
      );
    });
    return (
      <div
        style={{
          width: "10rem",
          margin: "10rem auto",
          padding: "1.5rem",
          border: "1px solid grey",
        }}
      >
        {items}
      </div>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
    this.cancelCount = this.cancelCount.bind(this);
    this.reduceCount = this.reduceCount.bind(this);
  }

  handleClick() {
    this.setState((prevState) => {
      if (prevState.count === 28) {
        return {
          count: 0,
          // it's advisable to use a parameter(prevState) the returns the original state
          // and make/apply changes to it than to change the state directly
        };
      } else {
        return {
          count: prevState.count + 1,
          // it's advisable to use a parameter(prevState) the returns the original state
          // and make/apply changes to it than to change the state directly
        };
      }
    });
  }

  reduceCount() {
    this.setState(() => {
      return {
        count: this.state.count - 1,
      };
    });
  }

  cancelCount() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "10rem",
          background: this.state.count === 0 ? "green" : "blue",
        }}
      >
        {this.state.count === 0 ? (
          <p style={{ background: "orange" }}>Not to reduce or to cancel yet</p>
        ) : (
          <div>
            <button style={{ color: "orangered" }} onClick={this.cancelCount}>
              Cancel
            </button>
            <button
              style={{ color: "palegoldenrod", background: "rgba(0,0,0, .01)" }}
              onClick={this.reduceCount}
            >
              Reduce Count
            </button>
          </div>
        )}
        <ChildApp items={this.state} handleClick={this.handleClick} />
      </div>
    );
  }
}
