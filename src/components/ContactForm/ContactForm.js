import React, { Component } from "react";
import { v4 as uuid } from "uuid";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...INITIAL_STATE,
    };
  }

  inputFieldHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  submitHandler = (evt) => {
    evt.preventDefault();

    const { name, number } = this.state;
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
      <form onSubmit={this.submitHandler}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.inputFieldHandler}
          />
        </label>
        <label>
          Number
          <input
            type="tel"
            name="number"
            value={number}
            onChange={this.inputFieldHandler}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default ContactForm;
