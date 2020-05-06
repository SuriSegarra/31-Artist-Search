import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Songs from '../components/Recordings/SongsList';
import { fetchRecording } from '../services/fetchRecordings';

const SongViewer = ({ match }) => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetchRecording(match.params.id)
      .then(songs => setSongs(songs));
  }, []);

  return (
    <>
      <Songs songs={songs}/>
    </>
  );
};

SongViewer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default SongViewer;
