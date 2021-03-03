import React from "react";
import PropTypes from "prop-types";

const Filter = ({ value, filterInput }) => (
  <label>
    Find contacts by name
    <input type="text" name="filter" value={value} onChange={filterInput} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  filterInput: PropTypes.func.isRequired,
};

export default Filter;
