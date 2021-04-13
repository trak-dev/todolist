import React, { Component } from "react";

export default class navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar navbar-light bg-muted ">
        <a className="navbar-brand" href="#">
          Navbar {""}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}
