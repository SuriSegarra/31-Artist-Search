import React, { useState, useEffect } from 'react';
// import Song from '../components/Recording/Song';
import Lyric from '../components/Lyric/Lyric';
import { fetchLyric } from '../services/fetchLyrics';
import { useParams } from 'react-router-dom';

const LyricViewer = () => { 
  const [lyrics, setLyrics] = useState([]);
  const { artist, title } = useParams();
  // console.log(title);
  useEffect(() => {
    fetchLyric(artist, title)
      .then(res => setLyrics(res));
  }, []);

  return (
    <>
      <pre key={title} to={`/lyrics/${artist}/${title}`}>
        <Lyric
          artist={artist}
          lyrics={lyrics}/>
      </pre>
    </>
  );  
};

export default LyricViewer;
