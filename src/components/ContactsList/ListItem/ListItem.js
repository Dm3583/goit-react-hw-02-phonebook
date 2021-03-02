import React from "react";

const ListItem = ({ contact, deleteContact }) => {
  const { id, name, number } = contact;
  return (
    <li>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </li>
  );
};

export default ListItem;
