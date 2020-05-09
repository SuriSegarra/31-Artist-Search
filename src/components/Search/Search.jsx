import React from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

const Search = ({ name, onChange, onClick }) => (
  <div className={styles.Search}>
    <input type='text' name={name} value={name} placeholder='Find an artist' onChange={onChange}/>
    <button onClick={onClick}>Search</button>
  </div>
);

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Search;
