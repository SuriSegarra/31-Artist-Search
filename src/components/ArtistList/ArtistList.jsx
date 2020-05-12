import React from 'react';
import Artist from '../Artist/Artist';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './ArtistList.css';

const ArtistsList = ({ artists, artistsName }) => {
  const artistsList = artists.map(artist => (
    <Link className={styles.textlink} key={artist.id} to={`/artist/${artistsName}/${artist.id}`}>
      <li>
        <Artist {...artist}/>
      </li>
    </Link>
  ));
  return (
    <div>
      <h1> Artists</h1>
      <ul className={styles.List} >
        {artistsList}
      </ul>
    </div>
  );
};

ArtistsList.propTypes = {
  artists: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  })).isRequired,
  artistsName: PropTypes.string.isRequired
    
};

export default ArtistsList;

