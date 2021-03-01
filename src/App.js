import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      contacts: [],
      name: "",
    };
  }

  inputFieldHandler = (evt) => {
    console.log(evt.target.value);
    return this.setState({
      name: evt.target.value,
    });
  };

  btnOnclickHandler = (evt) => {
    evt.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <form>
          <label>
            <input type="text" name="name" onChange={this.inputFieldHandler} />
          </label>
          <button type="button" onClick={this.btnOnclickHandler}>
            Add contact
          </button>
        </form>
        <h2>Contacts</h2>
        <ul>
          <li>Contact 1</li>
        </ul>
      </div>
    );
  }
}

export default App;