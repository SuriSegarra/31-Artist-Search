import React from 'react';
import PropTypes from 'prop-types';

const Lyrics = ({ artist, title, lyrics }) => {
  return (
    <section>
      <h2>{title} Lyrics</h2>
      <p>By {artist}</p>
      <pre>{lyrics}</pre>
    </section>
  );
};

Lyrics.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyrics;
