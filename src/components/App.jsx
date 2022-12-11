import { nanoid } from 'nanoid';
import { Component } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
  };

  addContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  render() {
    return (
      <section>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onSubmit={this.addContact} />
        </div>
        <div>
          <h2>Contacts</h2>
          <ContactList contacts={this.state.contacts} />
        </div>
      </section>
    );
  }
}
