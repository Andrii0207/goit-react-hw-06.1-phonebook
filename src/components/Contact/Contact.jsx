import PropTypes from 'prop-types';
import css from './Contact.module.css';

function Contact({ contact: { name, number, id }, onDeleteContact }) {
  return (
    <div className={css.contactWrapper}>
      <p className={css.contactData}>
        {name}: {number}
      </p>
      <button className={css.deleteContactBtn} type="button" onClick={() => onDeleteContact(id)}>
        Delete contact
      </button>
    </div>
  );
}

export default Contact;
