import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilteredContacts } from 'redux/selectors';
import css from './ContactList.module.css';
import { deleteContact } from 'redux/contactsSlice';

function ContactList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <ul>
      {filteredContacts.length === 0 && (
        <p style={{ fontSize: '24px' }}>Sorry, we haven't found any contacts</p>
      )}
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactWrapper}>
            <p className={css.contactData}>
              {name}: {number}
            </p>
            <button
              className={css.deleteContactBtn}
              type="button"
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
