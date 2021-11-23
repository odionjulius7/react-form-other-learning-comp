import React, { Component } from "react";

class MemeGenerator extends Component {
  state = {
    // isLoading: true,
    topText: "",
    bottomText: "",
    randomImg: "",
    allMemesImg: [],
  };

  async componentDidMount() {
    const api = await fetch("https://api.imgflip.com/get_memes");
    const response = await api.json();
    // const memes = await response.data;
    const { memes } = await response.data;
    this.setState({
      // isLoading: false,
      allMemesImg: memes,
    });
    // console.log(memes[0]);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const randNum = Math.floor(Math.random() * this.state.allMemesImg.length);
    const imgNum = this.state.allMemesImg[randNum].url;

    this.setState({
      randomImg: imgNum,
    });
  };

  render() {
    // console.log(this.state.allMemesImg.length);
    return (
      <div className="d-flex justify-content-center flex-column align-items-center">
        <form className="meme-form m-2 d-flex" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            value={this.state.topText}
            placeholder="top text"
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            value={this.state.bottomText}
            placeholder="bottom text"
            onChange={this.handleChange}
          />
          <button
            className="p-1"
            style={{
              fontWeight: "bolder",
              color: "white",
              background: "blue",
              border: "none",
            }}
          >
            {/* when you have a button in side of a form the most logical thing
                to do is put the onClick on the form tag but it's should be onSubmit
            */}
            GEN
          </button>
        </form>
        <div className="meme">
          {this.state.randomImg === "" ? (
            <p>NO MEME GENERATED YET!</p>
          ) : (
            <div style={{ display: "flex", width: "20rem", height: "20rem" }}>
              <img
                style={{ width: "100%", height: "100%" }}
                src={this.state.randomImg}
                alt=""
              />
            </div>
          )}
          <br />
          <p className="top">{this.state.topText}</p>
          <p className="bottom">{this.state.bottomText}</p>
        </div>

        <br />
        <br />
      </div>
    );
  }
}

export default MemeGenerator;
