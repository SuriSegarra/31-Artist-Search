import React from 'react';
import Artist from '../Artist/Artist';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

const Artists = ({ artists }) => {
  const artistsList = artists.map(artist => (
    <li key={artist.id}>
      <Artist {...artist}/>
    </li>
  ));
  return (
    <ul>
      {artistsList}
    </ul>
  );
};

Artist.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
    
};

export default Artists;

