import React, { Component } from "react";

class Counter extends Component {
  state = { value: this.props.value, tags: ["tag1", "tag2", "tag3"] };

  renderTags() {
    if (this.state.tags.length === 0) return <p>Rien à voir ici!</p>;

    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  handleIncrements = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "zero" : count;
  }

  render() {
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrements({ id: 1 })}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
    // <div>{this.renderTags()}</div>;
  }
}

export default Counter;
