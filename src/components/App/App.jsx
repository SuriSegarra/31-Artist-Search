import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import findedArtist from '../../Containers/ArtistsViewer';
import Releases from '../../Containers/AlbumViewer';
import SongViewer from '../../Containers/SongViewer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/song/:id' component={SongViewer}/>
          <Route exact path='/artist/:id' component={Releases}/>
          <Route exact path='/' component={findedArtist}/>
        </Switch>
      </Router>
    
    </>
    
  );

  
}
