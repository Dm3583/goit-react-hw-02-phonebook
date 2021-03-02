import React from "react";

const Filter = ({ value, filterInput }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={filterInput} />
  </label>
);

export default Filter;
