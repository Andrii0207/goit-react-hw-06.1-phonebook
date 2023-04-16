// import PropTypes from 'prop-types';
// import css from './Contact.module.css';
// import { useSelector } from 'react-redux';
// import { getContacts } from 'redux/selectors';

// function Contact({ contact: { name, number, id }, onDeleteContact }) {
//   const contact = useSelector(getContacts);
//   console.log(contact);

//   return (
//     <div className={css.contactWrapper}>
//       <>
//         <p className={css.contactData}>
//           {name}: {number}
//         </p>
//       </>
//       <button
//         className={css.deleteContactBtn}
//         type="button"
//         onClick={() => onDeleteContact(id)}
//       >
//         Delete contact
//       </button>
//     </div>
//   );
// }

// Contact.proTypes = {
//   contact: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
//     id: PropTypes.string.isRequired,
//   }),
//   onDeleteContact: PropTypes.func.isRequired,
// };

// export default Contact;
