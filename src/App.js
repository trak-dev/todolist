import React, { Component } from "react";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

export default class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4, nom: "saucisse" },
      { id: 2, value: 0, nom: "jambon" },
      { id: 3, value: 0, nom: "pizza" },
      { id: 4, value: 0, nom: "kebab" },
    ],
  };

  constructor() {
    super();
    console.log("app - constructor");
  }
  componentDidMount() {
    console.log("app mounted");
  }
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDelete = (counterId) => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onReset={this.handleReset}
          />
        </main>
      </React.Fragment>
    );
  }
}
