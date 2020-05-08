import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Lyric = ({ id, artist, title, lyrics }) => {
  return (
    <Link key={id} to={`/lyrics/${id}`}>
      <li>
        <h2>{title} Lyrics</h2>
        <p>By {artist}</p>
        <pre>{lyrics}</pre>
      </li>
    </Link>
  );
};

Lyric.propTypes = {
  id: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyric;
