import React, { useEffect, useState } from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onFormSubmition = (e) => {
    e.preventDefault();
    this.props.onSubmition(this.state.term);
  };
  render() {
    return (
      <div className="flex">
        <form onSubmit={this.onFormSubmition} className="search">
          <div className="flex">
            <label>Search for Images !!</label>
            <input
              type="text"
              className="input text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <div className="text">You are looking for :{this.state.term}</div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
