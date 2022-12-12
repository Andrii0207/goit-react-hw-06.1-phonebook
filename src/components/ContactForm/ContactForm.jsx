import { nanoid } from 'nanoid';
import { Component } from 'react';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  contactId = nanoid();

  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className={css.contactFormWrapper} onSubmit={this.handleSubmit}>
        <div className={css.inputDataWrapper}>
          <label className={css.labelName} htmlFor={this.contactId}>
            <p className={css.inputName}>Name</p>
            <input
              onChange={this.handleChange}
              value={this.state.name}
              className={css.inputData}
              type="text"
              name="name"
              id={this.contactId}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label htmlFor="">
            <p className={css.inputName}>Number</p>
            <input
              onChange={this.handleChange}
              value={this.state.number}
              className={css.inputData}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
        </div>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
