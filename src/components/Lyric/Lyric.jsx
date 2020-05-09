import React from 'react';
import PropTypes from 'prop-types';

const Lyric = ({ lyrics, artist, title }) => (
  <section> 
    <h2>{title} lyrics</h2>
    <p>By {artist}</p>
    <pre>{lyrics}</pre>
  </section>
);

Lyric.propTypes = {
  id: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  lyrics: PropTypes.string.isRequired
};

export default Lyric;
