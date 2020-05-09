import React from 'react';
import Song from '../Recording/Song';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const SongList = ({ songs, match }) => {
  const songElement = songs.map(song => (
    <Link key={song.id} to={`/lyrics/${match.params.artist}/${song.title}`}>
      <li>
        <Song {...song}/>
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
  })).isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      artist: PropTypes.string.isRequired
    })
  }).isRequired
};

export default SongList;
