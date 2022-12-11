import PropTypes from 'prop-types';
import css from './Contact.module.css';

function Contact({ contact: { name, number } }) {
  return (
    <>
      <p>
        {name}: {number}
      </p>
    </>
  );
}

export default Contact;
