import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <Contact contact={contact} onDeleteContact={onDeleteContact} />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
