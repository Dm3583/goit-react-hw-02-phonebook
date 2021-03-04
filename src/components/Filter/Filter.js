import React from "react";
import PropTypes from "prop-types";
import "./Filter.scss";

const Filter = ({ value, filterInput }) => (
  <label>
    <p>Find contacts by name</p>
    <input
      className="Filter__input"
      type="text"
      name="filter"
      value={value}
      onChange={filterInput}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string,
  filterInput: PropTypes.func.isRequired,
};

export default Filter;
