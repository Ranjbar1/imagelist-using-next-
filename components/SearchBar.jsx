import React, { useEffect, useState } from "react";

const SearchBar = () => {
  // const [searchTerm, useSearchTerm] = useState("");
  let searchedTerm;

  return (
    <div>
      <form action="" className="search">
        <div className="flex">
          <label>Search for Images !!</label>
          <input
            type="text"
            className="input text"
            onChange={(e) => {
              searchedTerm = e.target.value;
              // useSearchTerm({ searchedTerm });
              console.log(searchedTerm);
            }}
          />
          <div className="text">{searchedTerm}</div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
