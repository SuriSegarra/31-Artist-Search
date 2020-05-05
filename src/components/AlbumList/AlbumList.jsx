import React from 'react';
import Album from '../Album/Album';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const AlbumList = ({ releases }) => {
  const albumList = releases.map(release => (
    <Link key={release.id} to={`/artist${release.id}`}>
      <img src={`http://coverartarchive.org/release/${release.id}/front-250`}/>
      <li>
        <Album {...release}/>
      </li>
    </Link>

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

