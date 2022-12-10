import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import Contact from 'components/Contact/Contact';

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
