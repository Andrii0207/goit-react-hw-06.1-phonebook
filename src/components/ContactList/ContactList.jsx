import PropTypes from 'prop-types';
// import Contact from '../Contact/Contact';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import css from './ContactList.module.css';
// import css from './ContactList.module.css';

function ContactList() {
  const contacts = useSelector(getContacts);
  console.log(contacts);

  return (
    <ul>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id} className={css.contactWrapper}>
            <p className={css.contactData}>
              {name}: {number}
            </p>
            <button
              className={css.deleteContactBtn}
              type="button"
              // onClick={() => onDeleteContact(id)}
            >
              Delete contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
