import { nanoid } from 'nanoid';
import { Component } from 'react';
import { findAllInRenderedTree } from 'react-dom/test-utils';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson' },
      { id: 'id-2', name: 'Hermione Kline' },
      { id: 'id-3', name: 'Eden Clements' },
      { id: 'id-4', name: 'Annie Copeland' },
    ],
  };

  addContact = ({ name }) => {
    const newContact = {
      id: nanoid(),
      name,
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
