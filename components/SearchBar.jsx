import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="m-2 ml-4 sm:flex sm:justify-end sm:align-middle">
      <form onSubmit={onSubmit} className="">
        <div className="p-2">
          <label className=" mr-3">Search for Images:</label>
          <input
            type="text"
            className="border-2 border-blue-700 rounded focus:border-emerald-700 focus:border-2"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <div className="">You are looking for:{term}</div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
