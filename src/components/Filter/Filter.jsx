import css from './Filter.module.css';

function Filter({ name, onChange }) {
  return (
    <>
      <p>Find contacts by name</p>
      <input type="text" value={name} onChange={onChange} />
    </>
  );
}

export default Filter;
