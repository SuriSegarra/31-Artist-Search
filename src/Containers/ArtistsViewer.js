import React, {  useState } from 'react';
import Artists from '../Song/ArtistList/ArtistList';
import { fetchArtist } from '../services/artists';
import Search from '../Song/Search/Search';

const ArtistsViewer = () => {
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
 
  const handleClick = () => {
    fetchArtist(search)
      .then(artists => setArtists(artists.artists));
  };

  return (
    <>
      <Search onChange={handleChange} onClick={handleClick}/>
      <Artists 
        artists={artists}/>
    </>
  );
};

export default ArtistsViewer;
