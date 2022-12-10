import PropTypes from 'prop-types';
import css from './Contact.module.css';

function Contact({ contact: { name } }) {
  return (
    <>
      <p>{name}</p>
    </>
  );
}

export default Contact;
