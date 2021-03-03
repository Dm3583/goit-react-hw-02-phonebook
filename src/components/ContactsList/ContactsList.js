import React from "react";
import PropTypes, { shape } from "prop-types";
import ListItem from "./ListItem";

const ContactsList = ({ contactsList, deleteContact }) => (
  <ul>
    {contactsList.map((contact) => (
      <ListItem
        key={contact.id}
        contact={contact}
        deleteContact={deleteContact}
      />
    ))}
  </ul>
);

ContactsList.propTypes = {
  contactsList: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
