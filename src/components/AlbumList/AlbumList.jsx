import React from 'react';
import Album from '../Album/Album';
import PropTypes from 'prop-types';

const AlbumList = ({ releases }) => {
  const albumList = releases.map(release => (
    <li key={release.id}>
      <Album {...release}/>
    </li>
  ));

  return (
    <ul>
      {albumList}
    </ul>
  );
};

AlbumList.propTypes = {
  releases: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date:PropTypes.string.isRequired
  })).isRequired
};

export default AlbumList;

