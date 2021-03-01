import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: "",
      number: "",
    };
  }

  inputFieldHandler = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  btnOnclickHandler = (evt) => {
    evt.preventDefault();
    const id = uuid();

    this.setState(({ contacts, name, number }) => {
      console.log(id);
      return { contacts: [...contacts, { id, name, number }] };
    });
    this.reset();
  };

  reset = () => {
    this.setState({ name: "", number: "" });
  };

  render() {
    const { name, number, contacts } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
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
          <button type="button" onClick={this.btnOnclickHandler}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default App;
