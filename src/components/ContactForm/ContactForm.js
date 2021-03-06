import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import PropTypes from "prop-types";
import "./ContactForm.scss";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  static propTypes = {
    addContact: PropTypes.func.isRequired,
  };

  state = {
    ...INITIAL_STATE,
  };

  handlerInputField = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  handlerSubmit = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;

    if (!name || !number) {
      return;
    }

    const newContact = { id: uuid(), name, number };

    this.props.addContact(newContact);

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="ContactForm" onSubmit={this.handlerSubmit}>
        <label>
          <p className="ContactForm__label">Name</p>
          <input
            className="ContactForm__text-input"
            type="text"
            name="name"
            value={name}
            onChange={this.handlerInputField}
          />
        </label>
        <label>
          <p className="ContactForm__label">Number</p>
          <input
            className="ContactForm__text-input"
            type="tel"
            name="number"
            value={number}
            onChange={this.handlerInputField}
          />
        </label>
        <button className="ContactForm__button" type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
