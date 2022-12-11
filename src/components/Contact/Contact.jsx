import PropTypes from 'prop-types';
import css from './Contact.module.css';

function Contact({ contact: { name, number, id }, onDeleteContact }) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
}

export default Contact;
