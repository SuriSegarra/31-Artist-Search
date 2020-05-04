import React from 'react';
import PropTypes from 'prop-types';

const Artist = ({ name, onChange, onSubmit }) => 
  (
    <>
      <h2>  Search Your Artist </h2>
      <input
        type='search'
        name={name}
        value={name}
        onChange={onChange}/>
      <button onSubmit={onSubmit}>Search</button>
    </>
  );
Artist.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.string.isRequired,
  onSubmit: PropTypes.string.isRequired
};

export default Artist;


