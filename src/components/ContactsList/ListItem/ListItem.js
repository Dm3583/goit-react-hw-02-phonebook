import React from "react";
import PropTypes from "prop-types";
import "./ListItem.scss";

const ListItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li className="ListItem">
      {name}: {number}
      <button
        className="ListItem__button"
        type="button"
        onClick={() => deleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  deleteContact: PropTypes.func.isRequired,
};

export default ListItem;
