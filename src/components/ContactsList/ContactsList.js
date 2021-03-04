import React from "react";
import PropTypes, { shape } from "prop-types";
import ListItem from "./ListItem";
import "./ContactsList.scss";

const ContactsList = ({ contactsList, deleteContact }) => (
  <ul className="ContactsList">
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
