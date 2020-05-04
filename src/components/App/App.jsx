import React from 'react';
// import ArtistsViewer from '../../Containers/ArtistsViewer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import finedArtists from '../../Containers/ArtistsViewer';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/' component={finedArtists}/>
        </Switch>
      </Router>
    
    </>
    
  );

  
}
