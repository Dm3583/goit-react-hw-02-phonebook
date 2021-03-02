import React from "react";
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

export default ContactsList;
