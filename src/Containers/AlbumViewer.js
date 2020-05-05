import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Albums from '../components/AlbumList/AlbumList';
import { fetchRelease } from '../services/fetchAlbum';

const AlbumViewer = ({ match }) => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchRelease(match.params.id)
      .then(albums => setAlbums(albums));
  }, []);


  return (
    <>
      <Albums releases={albums}/>
    </>
  );
};

AlbumViewer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id:PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};


export default AlbumViewer;
