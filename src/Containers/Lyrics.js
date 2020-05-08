import React, {useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Lyrics from '../components/Lyric/Lyric';
import { fetchLyric } from '../services/fetchLyrics';
import { useParams } from 'react-router-dom';

const LyricViewer = () => {
  const [lyrics, setLyrics] = useState([]);
  const { artist, title } = useParams();

  useEffect(() => {
    fetchLyric(artist, title)
      .then(res => setLyrics(res));
  }, []);

  return (
    <>
      <Lyrics
        artist={artist}
        lyrics={lyrics}/>
    </>
  );  
};

export default LyricViewer;
