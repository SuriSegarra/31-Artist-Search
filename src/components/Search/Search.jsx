import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ name, onChange, onClick }) => (
  <div>
    <input type='search' name={name} value={name} onChange={onChange}/>
    <button onClick={onClick}>Search</button>
  </div>
);

Search.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Search;
