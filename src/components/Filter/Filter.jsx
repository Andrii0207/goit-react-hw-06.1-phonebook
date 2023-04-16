import { useDispatch, useSelector } from 'react-redux';
import { filterContacts } from 'redux/filterSlice';
import { getFilteredContacts } from 'redux/selectors';
import css from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(getFilteredContacts);

  return (
    <>
      <p className={css.inputName}>Find contacts by name</p>
      <input
        className={css.inputData}
        type="text"
        name="filter"
        value={filteredContacts}
        onChange={evt => dispatch(filterContacts(evt.target.value))}
      />
    </>
  );
}

export default Filter;
