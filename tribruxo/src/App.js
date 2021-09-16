import "./App.css";
import { Component } from "react";
import Home from "./components/Home/Home";

class App extends Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((response) => {
        return response.json();
      })
      .then((response) => this.setState({ characters: response }))
      .catch((error) => console.log("Error"));
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="App">
        <section className="App-header">
          <div>{<Home characters={characters}></Home>}</div>
        </section>
      </div>
    );
  }
}

export default App;
