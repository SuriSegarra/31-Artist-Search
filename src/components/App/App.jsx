import React from 'react';
// import ArtistsViewer from '../../Containers/ArtistsViewer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchedArtist from '../../components/Search/Search';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path='/artist/:id' component={SearchedArtist}/>
        </Switch>
      </Router>
    
    </>
    
  );

  
}
