import React from 'react';
import Album from '../Album/Album';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './AlbumList.css';

const AlbumList = ({ releases, artist, }) => {
  const albumList = releases.map(release => (
    
    <Link className={styles.textlink} key={release.id} to={`/song/${artist}/${release.id}`}>

      <img src={`http://coverartarchive.org/release/${release.id}/front-250`} />
      <li>
        <Album {...release}/>
      </li>
    </Link>

  ));
  return ( 
    <>
      <h1> Albums</h1>
      <ul className={styles.List}>
        {albumList}
      </ul>
    </>
  );
};

AlbumList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date:PropTypes.string.isRequired
  })).isRequired,
  artist: PropTypes.string.isRequired
};

export default AlbumList;

