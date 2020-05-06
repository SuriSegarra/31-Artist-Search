import React from 'react';
// import ArtistsViewer from '../../Containers/ArtistsViewer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import findedArtist from '../../Containers/ArtistsViewer';
import Releases from '../../Containers/AlbumViewer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/artist/:id' component={Releases}/>
          <Route exact path='/' component={findedArtist}/>
        </Switch>
      </Router>
    
    </>
    
  );

  
}
