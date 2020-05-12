import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import findedArtist from '../../Containers/ArtistsViewer';
import Releases from '../../Containers/AlbumViewer';
import SongViewer from '../../Containers/SongViewer';
import Lyrics from '../../Containers/Lyrics';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/lyrics/:artist/:title' component={Lyrics}/>
          <Route exact path='/song/:artist/:id' component={SongViewer}/>
          <Route exact path='/artist/:artist/:id' component={Releases}/>
          <Route exact path='/' component={findedArtist}/>
        </Switch>
      </Router>
    
    </>
    
  );

  
}
