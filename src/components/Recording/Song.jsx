import React from 'react';
import PropTypes from 'prop-types';


const Song = ({ title, date }) => {
  return (
    <>
      <p>{title}</p>
      <p>{date}</p>
    </>
  );
};

Song.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired
};

export default Song;
