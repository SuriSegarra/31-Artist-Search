import React from 'react';
import Artist from '../Artist/Artist';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ArtistsList = ({ artists }) => {
  const artistsList = artists.map(artist => (
    <Link key={artist.id} to={`/artist/${artist.id}`}>
      <li>
        <Artist {...artist}/>
      </li>
    </Link>
  ));
  return (
    <ul>
      {artistsList}
    </ul>
  );
};

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired
    
};

export default ArtistsList;

