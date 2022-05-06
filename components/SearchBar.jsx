import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="border-5 rounded ">
      <form onSubmit={onSubmit} className="border-3 rounded ">
        <div className="flex colomn ">
          <label className="text-bold-3 border-3 rounded">
            Search for Images !!
          </label>
          <input
            type="text"
            className=""
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
