import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <Router>
      <Switch>
      <Route path="/" exact component={footer}/>
      </Switch>
      </Router>
 
    </div>
  );
}

export default App;
