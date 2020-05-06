import React from 'react';
import Recording from '../Recording/Recording';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SongList = ({ songs }) => {
  const songElement = songs.map(song => (
    <Link key={song.id} to={`release/${song.id}`}>
      <li>
        <Recording {...song}/>
      </li>
    </Link>
  ));
  return (
    <ul>
      {songElement}
    </ul>
  );
};

SongList.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
  })).isRequired
};

export default SongList;
