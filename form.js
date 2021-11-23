import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // event.preventDefault();
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({
          // the square bracket is always needed for the event option name provided to the state
          [name]: checked,
        })
      : this.setState({
          // the square bracket is always needed for the event option name provided to the state
          [name]: value,
        });
    console.log(type, checked);
  }

  // async componentDidMount() {
  //   const getApi = await fetch("https://swapi.dev/api/people/");
  //   const response = await getApi.json();
  //   const dataResult = response;
  //   console.log(dataResult);
  //   this.setState({
  //     starWarInfo: dataResult,
  //     isLoading: false,
  //   });
  // }

  render() {
    console.log(this.state.gender);
    const style = {
      textAlign: "center",
      paddingTop: "2rem",
    };
    return (
      <form style={style}>
        <input
          type="text"
          value={this.state.firstName}
          name="firstName"
          placeholder="first name"
          onChange={this.handleChange}
          style={{
            margin: "1rem",
            outline: "none",
            border: "1px solid blue",
            borderRadius: "0.4rem",
          }}
        />
        <input
          type="text"
          value={this.state.lastName}
          name="lastName"
          placeholder="last name"
          onChange={this.handleChange}
        />
        <p>{`${this.state.firstName} "hold on" ${this.state.lastName}`} </p>
        <label>
          <input
            type="checkbox"
            checked={this.state.isFriendly}
            name="isFriendly"
            onChange={this.handleChange}
          />
          Is Friendly
        </label>
        <br />

        <h3>Radio button</h3>
        <label>
          {/* the radio btn will only be highlight/click when the value pass to name matches the the checked value  */}
          <input
            type="radio"
            checked={this.state.gender === "male"}
            name="gender"
            value="male"
            onChange={this.handleChange}
          />
          Male
        </label>
        <label>
          <input
            type="radio"
            checked={this.state.gender === "female"}
            name="gender"
            value="female"
            onChange={this.handleChange}
          />
          Female
        </label>
        <br />
        <label>Favorite Color</label>
        <select
          value={this.state.favColor}
          name="favColor"
          onChange={this.handleChange}
        >
          <option value="blue">Blue</option>
          <option value="white">White</option>
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
        </select>
      </form>
    );
  }
}

export default Form;
