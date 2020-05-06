import React from 'react';
// import ArtistsViewer from '../../Containers/ArtistsViewer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import findedArtist from '../../Containers/ArtistsViewer';
import Releases from '../../Containers/AlbumViewer';
import Songs from '../../Containers/SongViewer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/artist/:id' component={Releases}/>
          <Route exact path='/release/:id' component={Songs}/>
          <Route exact path='/' component={findedArtist}/>
        </Switch>
      </Router>
    
    </>
    
  );

  
}
