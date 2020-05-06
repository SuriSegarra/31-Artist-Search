import React from 'react';
import PropTypes from 'prop-types';

const Album = ({ name, date }) => {
  return (
    <>
      <p>{name}</p>
      <p>{date}</p>
    </>
  );
};

Album.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Album;
