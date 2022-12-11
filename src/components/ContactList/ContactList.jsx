import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
