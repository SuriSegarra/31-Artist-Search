import React, {  useState } from 'react';
import Artists from '../components/ArtistList/ArtistList';
import { fetchArtist } from '../services/artists';
import Search from '../components/Search/Search';


const ArtistsViewer = () => {
  const [artists, setArtists] = useState([]);
  const [search, setSearch] = useState('');
  const [hidden, setHidden] = useState(false);
  const handleChange = ({ target }) => {
    setSearch(target.value);
  };
 
  const handleClick = () => {
    setHidden(true);
    fetchArtist(search)
      .then(artists => setArtists(artists.artists));
  };

  const searchBar = hidden ? null : <Search onChange={handleChange} onClick={handleClick} hidden={false}/>;

  return (
    <>
      {searchBar}
      <Artists 
        artists={artists}
        artistsName={search}/>
    </>
  );
};

export default ArtistsViewer;
