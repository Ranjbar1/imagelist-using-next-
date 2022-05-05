import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="flex">
      <form onSubmit={onSubmit} className="search">
        <div className="flex">
          <label>Search for Images !!</label>
          <input
            type="text"
            className="input text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <div className="text">You are looking for :{term}</div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
